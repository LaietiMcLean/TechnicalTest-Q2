import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], page: number = 0, search: string = ''): Pokemon[] {

    if (search.length === 0)
      return pokemons;

    const filteredPokemons = pokemons.filter(poke => poke.name.includes(search));
      return filteredPokemons;

  }

}
