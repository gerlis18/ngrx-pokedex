import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { UserModel } from '../../models/user.model';
import { selectUsers } from '../../reducers/login.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: UserModel = {
    password: '',
    email: ''
  };
  showErrorMessage: boolean;
  users: UserModel[];

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.pipe(select(selectUsers))
      .subscribe(users => this.users = users);
  }

  ngOnInit() {
  }

  login(props: UserModel) {
    const user = this.users.find(item => item.email === props.email && item.password === props.password);
    return user ? user : null;
  }

  onSubmit() {
    if (!this.login(this.userModel)) {
        this.showErrorMessage = true;
        return;
    }

    localStorage.setItem('user', JSON.stringify(this.userModel));
    this.router.navigate(['/home']);
  }

}
