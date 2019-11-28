export interface PokemonModel {
  selectedPokemon?: any;
  pokemonList?: PokemonList[];
  searchName?: string;
}

export interface PokemonList {
  url: any
  name: string;
}
