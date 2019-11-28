import { createAction, props } from '@ngrx/store';
import { PokemonModel } from '../models/pokemon.model';

export const updatePokemonList = createAction('[Pokemon page] update pokemon list', props<PokemonModel>());
export const updateSearchParam = createAction('[Pokemon page] update pokemon filter', props<PokemonModel>());
