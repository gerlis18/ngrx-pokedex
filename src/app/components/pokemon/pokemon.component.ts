import { Component, Input } from '@angular/core';
import { updatePokemonList } from '../../actions/pokemon.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  @Input() index: number;
  @Input() data: any;

  constructor(private router: Router, private store: Store<AppState>) { }

  onSelectPokemon(event: any) {
    event.preventDefault();
    this.router.navigate([`/pokemon/${this.data.id}`]);
    this.store.dispatch(updatePokemonList({ indexScroll: this.index }));
  }

}
