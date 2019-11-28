import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private guard: AuthGuard) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.guard.canActivate();
  }

}
