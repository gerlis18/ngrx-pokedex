import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { UserModel } from '../../models/user.model';
import { register } from '../../actions/register.actions';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: UserModel = {
    password: '',
    email: '',
    username: ''
  };
  confirmPassword: string;

  constructor(
    private store: Store<AppState>,
    private localService: LocalstorageService,
    private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(register({ credentials: this.model }));
    this.localService.setUser(this.model);
    this.router.navigate(['/login']);
  }

}
