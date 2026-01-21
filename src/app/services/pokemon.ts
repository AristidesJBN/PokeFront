import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get<any>(`${this.apiUrl}?limit=20`);
  }

  getPokemonById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}