import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-details.html',
  styleUrls: ['./pokemon-details.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.pokemonService.getPokemon(id).subscribe(data => {
      this.pokemon = data;
    });

    }
  }

}
