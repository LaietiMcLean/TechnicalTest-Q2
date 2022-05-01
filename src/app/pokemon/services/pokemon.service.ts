import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { FetchAllPokemonResponse, Pokemon } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get<FetchAllPokemonResponse>(`${this.url}/pokemon?limit=100&offset=200`)
        .pipe(
          map(this.transformSmallPokemonIntoPokemon)
        )
  }

  private transformSmallPokemonIntoPokemon(resp: FetchAllPokemonResponse): Pokemon[] {
      const pokemonList: Pokemon[] = resp.results.map(poke => {

        const urlArr = poke.url.split('/');
        const id = urlArr[6];
        const pic =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return {
          id,
          name: poke.name,
          pic
        }
      })
      return pokemonList;
  }

}
