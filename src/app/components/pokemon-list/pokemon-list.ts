import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { PokemonService } from '../../services/pokemon';
import { debounceTime, distinctUntilChanged, switchMap, tap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './pokemon-list.html',
  styleUrls: ['./pokemon-list.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  search: string = '';

  searchControl = new FormControl('');
  allPokemonsCache: any[] | null = null;

  limit = 15;
  offset = 0;
  total = 0;
  currentPage = 1;

  loading = false;
  notFound = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(val => {
        this.search = val || '';
        if (!this.search.trim()) {
          this.resetSearch();
        }
      }),
      switchMap(term => {
        const q = (term || '').trim().toLowerCase();
        if (!q) {
          return of(null);
        }
        this.loading = true;
        this.notFound = false;
        if (this.allPokemonsCache) {
          const filtered = this.allPokemonsCache.filter((p: any) => p.name.startsWith(q));
          return of(filtered);
        }
        return this.pokemonService.getAllPokemons().pipe(
          map(res => res.results || []),
          tap(results => this.allPokemonsCache = results),
          map(results => results.filter((p: any) => p.name.startsWith(q))),
            catchError(() => of([]))
        );
      })
      ).subscribe(results => {
        if (results === null) return;
        this.pokemons = results as any[];
        this.loading = false;
        this.notFound = !results || (results as any[]).length === 0;
      });
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
