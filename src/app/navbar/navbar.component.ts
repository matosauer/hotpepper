import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleNavbar = true;
  isLoggedIn$: Observable<boolean>;
  user$: Observable<User>;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.user$ = this.authService.user;
  }

  logout(){
    this.authService.logout()
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }
}
