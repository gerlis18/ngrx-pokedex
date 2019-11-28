import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { UserModel } from '../../models/user.model';
import { register } from '../../actions/register.actions';
import { Router } from '@angular/router';

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

  constructor(private store: Store<AppState>, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(register({ credentials: this.model }));
    this.router.navigate(['/login']);
  }

}
