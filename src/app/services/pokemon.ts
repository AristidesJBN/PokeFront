import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  /** Lista paginada */
  getPokemons(limit: number, offset: number) {
    return this.http.get<any>(
      `${this.apiUrl}?limit=${limit}&offset=${offset}`
    );
  }

  /** Busca por ID ou nome */
  getPokemon(idOrName: string) {
    return this.http.get<any>(
      `${this.apiUrl}/${idOrName.toLowerCase()}`
    );
  }
}
