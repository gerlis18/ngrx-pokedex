import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthGuard } from '../../auth.guard';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { selectPokemon } from '../../../reducers/pokemon.reducer';
import { updateSearchParam } from '../../../actions/pokemon.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit, OnDestroy {

  searchName: string;
  btnName: string;
  @Output() search = new EventEmitter();

  constructor(
    private guard: AuthGuard,
    private store: Store<AppState>,
    private router: Router) {
    store.select('pokemonList')
      .subscribe(state => this.searchName = state.searchName);
  }

  ngOnInit(): void {
    this.onChangeRoute();
  }

  ngOnChanges() {
    this.onChangeRoute();
  }

  onChangeRoute() {
    if (location.pathname === '/home') {
      this.btnName = 'Cerrar sesión';
      return true;
    } else {
     this.btnName = 'Atrás';
     return false;
    }
  }

  logout() {
    if (this.onChangeRoute()) {
      localStorage.clear();
      this.guard.canActivate();
    } else {
      this.router.navigate(['/home']);
    }
  }

  findPokemon() {
    this.store.pipe(select(selectPokemon, { name: this.searchName }))
      .subscribe(pokes => this.search.emit(pokes));
  }

  ngOnDestroy(): void {
    this.store.dispatch(updateSearchParam(
      { searchName: this.searchName }
    ));
  }

}
