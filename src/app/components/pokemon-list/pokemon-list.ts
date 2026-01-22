import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  search: string = '';

  limit = 15;
  offset = 0;
  total = 0;
  currentPage = 1;

  loading = false;
  notFound = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.loading = true;
    this.notFound = false;

    this.pokemonService.getPokemons(this.limit, this.offset)
      .subscribe(res => {
        this.pokemons = res.results;
        this.total = res.count;
        this.loading = false;
      });
  }

  searchPokemon() {
    if (!this.search.trim()) {
      this.resetSearch();
      return;
    }

    this.loading = true;
    this.notFound = false;

    this.pokemonService.getPokemon(this.search)
      .subscribe({
        next: data => {
          this.pokemons = [data];
          this.loading = false;
        },
        error: () => {
          this.pokemons = [];
          this.notFound = true;
          this.loading = false;
        }
      });
  }

  resetSearch() {
    this.search = '';
    this.offset = 0;
    this.currentPage = 1;
    this.loadPokemons();
  }

  nextPage() {
    this.offset += this.limit;
    this.currentPage++;
    this.loadPokemons();
  }

  prevPage() {
    if (this.offset === 0) return;

    this.offset -= this.limit;
    this.currentPage--;
    this.loadPokemons();
  }

  get totalPages(): number {
    return Math.ceil(this.total / this.limit);
  }
}
