import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemonList: any[] = [];
  currentPage: number = 0;
  limit: number = 25;
  loading: boolean = false;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList() {
    const offset = this.currentPage * this.limit;
    this.loading = true;
    this.pokemonService
      .getPokemonList(offset, this.limit)
      .then((response) => {
        this.pokemonList = this.pokemonList.concat(response.data.results);
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  }

  onScroll() {
    if (!this.loading) {
      this.currentPage++;
      this.loadPokemonList();
    }
  }

  goToDetail(pokemon: any) {
    const pokemonId = this.getPokemonIdFromUrl(pokemon.url);
    this.router.navigate(['/pokemon', pokemonId]);
  }

  private getPokemonIdFromUrl(url: string): string {
    const regex = /\/(\d+)\/$/;
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
    return '';
  }
}
