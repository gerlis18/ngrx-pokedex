import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { updatePokemonList } from '../../actions/pokemon.actions';
import { PokemonList } from '../../models/pokemon.model';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(CdkVirtualScrollViewport, { static: false}) scroll: CdkVirtualScrollViewport;
  pokeList: PokemonList[] = [];
  indexScroll: number;

  constructor(private pokeService: PokeService, private store: Store<AppState>) {
    store.select('pokemonList')
      .subscribe(res => this.indexScroll = res.indexScroll);
  }

  ngAfterViewInit(): void {
    this.scroll.scrolledIndexChange.subscribe(index => this.indexScroll = index);
    setTimeout(() => {
      this.scroll.scrollToIndex(this.indexScroll);
    }, 100);
  }

  ngOnInit() {
    this.pokeService.getPokemons()
      .subscribe((res: any) => {
        this.pokeList = [];
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

  onSearchPokemon(pokeList: PokemonList[]) {
    this.pokeList = [];
    this.pokeList = pokeList;
  }
}
