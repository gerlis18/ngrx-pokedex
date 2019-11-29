export interface PokemonModel {
  selectedPokemon?: any;
  pokemonList?: PokemonList[];
  searchName?: string;
  indexScroll?: number;
}

export interface PokemonList {
  url: any;
  name: string;
}
