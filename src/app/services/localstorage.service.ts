import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setUser(user: UserModel) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): UserModel {
    return JSON.parse(localStorage.getItem('user'));
  }
}
