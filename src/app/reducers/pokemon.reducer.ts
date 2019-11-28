import { PokemonModel } from '../models/pokemon.model';
import { Action, createReducer, createSelector, on } from '@ngrx/store';
import * as pokeActions from '../actions/pokemon.actions';
import { AppState } from './index';

const initialState: PokemonModel = {
  selectedPokemon: {},
  pokemonList: [],
  searchName: ''
};

function updatePokemonList(state: PokemonModel, props: PokemonModel) {
  return {
    selectedPokemon: state.selectedPokemon,
    pokemonList: [...state.pokemonList, ...props.pokemonList],
    searchName: state.searchName
  };
}

function updatePokemonFilterName(state: PokemonModel, props: PokemonModel) {
  return {
    selectedPokemon: state.selectedPokemon,
    pokemonList: state.pokemonList,
    searchName: props.searchName
  };
}

const pokeReducer = createReducer(
  initialState,
  on(pokeActions.updatePokemonList, (state, props) => updatePokemonList(state, props)),
  on(pokeActions.updateSearchParam, (state, props) => updatePokemonFilterName(state, props)),
);

export function reducer(state: PokemonModel, action: Action) {
  return pokeReducer(state, action);
}

export const selectPokemon = createSelector(
  (state: AppState) => state.pokemonList,
  (state: PokemonModel, props: any) => {
    return state.pokemonList.filter(poke => poke.name.includes(props.name));
  }
);
