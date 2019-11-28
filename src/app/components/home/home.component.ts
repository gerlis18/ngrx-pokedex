import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { updatePokemonList } from '../../actions/pokemon.actions';
import { PokemonList } from '../../models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokeList: PokemonList[] = [];

  constructor(private pokeService: PokeService, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.pokeService.getPokemons()
      .subscribe((res: any) => {
        res.map((info: PokemonList) => {
          this.pokeList.push({
            name: info.name,
            url: this.pokeService.getPokemonByUrl(info.url as string)
          });
        });
        this.store.dispatch(updatePokemonList({
          selectedPokemon: {},
          pokemonList: this.pokeList
        }));
      });
  }
}
