import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { updatePokemonList } from '../../actions/pokemon.actions';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: UserModel = {
    username: '',
    password: '',
    email: ''
  };

  constructor(
    private localService: LocalstorageService,
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit() {
    this.user = this.localService.getUser();
  }

  save() {
    this.localService.setUser(this.user);
    this.store.dispatch(updatePokemonList({ indexScroll: (0) }));
    this.router.navigate(['/home']);
  }

}
