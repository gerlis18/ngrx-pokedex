import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { UserModel } from '../../models/user.model';
import { loginUser } from '../../reducers/login.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = {
    password: '',
    email: ''
  };
  showErrorMessage: boolean;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    const user = this.store.pipe(select(loginUser, this.user));
    user.subscribe(credentials => {
      if (!credentials) {
        this.showErrorMessage = true;
        return;
      }

      localStorage.setItem('user', JSON.stringify(credentials));
      this.router.navigate(['/home']);
    });
  }

}
