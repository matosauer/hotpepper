import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string;
  successMessage: string;

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  
  user: User;

  constructor(private authService: AuthService) { 
    this.authService.user.subscribe( u => {
        this.user = u;
    });
  }

  ngOnInit(): void {
    this.email = new FormControl("", [Validators.required]);
    this.password = new FormControl("", [Validators.required]);

    this.loginForm = new FormGroup({
      'email': this.email,
      'password': this.password
    });
  }

  login(): void {
    this.authService.login(this.email.value, this.password.value)
      .then(value => {
        this.loginForm.reset();
      })
      .catch(err => {
        this.errorMessage = "Invalid email and or password!";
        console.log('Something went wrong:',err.message);
      });
  }

  logout(){
    this.authService.logout()
    .then(value => {
      this.loginForm.reset();
    })
    .catch(err => {
      this.errorMessage = "Something went wrong";
      console.log('Something went wrong:',err.message);
    });
  }
}
