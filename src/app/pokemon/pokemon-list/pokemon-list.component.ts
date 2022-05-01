import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getAllPokemons()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });

  }

}
