import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number) {
    return this.http.get<any>(
      `${this.apiUrl}?limit=${limit}&offset=${offset}`
    );
  }

  getPokemon(idOrName: string) {
    return this.http.get<any>(
      `${this.apiUrl}/${idOrName.toLowerCase()}`
    );
  }

  getAllPokemons() {
    return this.http.get<any>(
      `${this.apiUrl}?limit=100000&offset=0`
    );
  }
}
