import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  getPokemonList(offset: number, limit: number) {
    return axios.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetail(idOrName: string) {
    return axios.get(`${this.baseUrl}/pokemon/${idOrName}`);
  }
}
