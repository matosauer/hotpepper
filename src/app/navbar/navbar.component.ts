import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  user: User;
  
  constructor(private authService: AuthService,
              private router: Router) { 
    this.authService.user.subscribe(u => {
        this.user = u;
      });
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    .then( t=> {
      this.router.navigate(['/']);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }
}
