import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  toggleNavbar = true;
  
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    console.log("NAV BAR role = " + this.authService.userDetails?.role );
    console.log("NAV BAR isLoggedIn = " + this.authService.isLoggedIn() );
  }

  logout(){
    this.authService.logout()
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }
}
