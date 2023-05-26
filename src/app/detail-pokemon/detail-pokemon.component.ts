import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
  pokemon: any;
  showAllMoves: boolean = false;
  showAllStats: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.getPokemonDetails(pokemonId);
    }
  }

  getPokemonDetails(id: string): void {
    this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .subscribe((response: any) => {
        this.pokemon = response;
        // console.log(this.pokemon, 'data');
        this.titleService.setTitle(`${this.pokemon.name}`);
      });
  }
}
