import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';
import { UserModel } from '../../models/user.model';
import { Router } from '@angular/router';

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

  constructor(private localService: LocalstorageService, private router: Router) { }

  ngOnInit() {
    this.user = this.localService.getUser();
  }

  save() {
    this.localService.setUser(this.user);
    this.router.navigate(['/home']);
  }

}
