import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { AuthGuard } from '../../auth.guard';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { selectPokemon } from '../../../reducers/pokemon.reducer';
import { Router } from '@angular/router';
import { UserModel } from '../../../models/user.model';
import { LocalstorageService } from '../../../services/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit {

  searchName = '';
  btnName: string;
  user: UserModel;
  @Output() search = new EventEmitter();

  constructor(
    private guard: AuthGuard,
    private store: Store<AppState>,
    private localService: LocalstorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.onChangeRoute();
    this.getUserInfo();
  }

  ngOnChanges() {
    this.onChangeRoute();
    this.getUserInfo();
  }

  getUserInfo() {
    this.user = this.localService.getUser();
  }

  onChangeRoute() {
    if (location.hash.includes('home')) {
      this.btnName = 'Cerrar sesión';
      return true;
    } else {
     this.btnName = 'Atrás';
     return false;
    }
  }

  logout(event: any) {
    event.preventDefault();
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

}
