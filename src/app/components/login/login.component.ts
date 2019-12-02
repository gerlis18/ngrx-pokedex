import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';

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

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private localService: LocalstorageService) { }

  ngOnInit() {
    
  }

  login() {
    const savedUser = this.localService.getUser();
    return savedUser.email === this.userModel.email
      && savedUser.password === this.userModel.password;
  }


  onSubmit() {
    if (!this.login()) {
        this.showErrorMessage = true;
        return;
    }

    this.router.navigate(['/home']);
  }

}
