import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

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

  constructor(public authService: AuthService) { }

  ngOnInit(): void {

    this.email = new FormControl("", [Validators.required]);
    this.password = new FormControl("", [Validators.required]);

    this.loginForm = new FormGroup({
      'email': this.email,
      'password': this.password
    });

    // const editorOnly = () => pipe(this.authService.user, map(claims => claims.role === 'editor'));

    // const editorOnly = () => pipe(this.authService.user => {map(claims => claims.role === 'editor')});

    const adminOnly = () => { return (this.authService.userDetails?.role === 'admin') };

    console.log("login admin only = " + adminOnly());
    console.log("login role = " + this.authService.userDetails?.role );
    console.log("login isLoggedIn = " + this.authService.isLoggedIn() );
    // console.log("role = " + (this.authService.user | async)?.role );

  }

  login(): void {
    this.authService.login(this.email.value, this.password.value)
      .then(value => {
        this.loginForm.reset();
        console.log("login user details: " + this.authService.userDetails);
      })
      .catch(err => {
        this.errorMessage = "Invalid email and or password!";
        console.log('Something went wrong:',err.message);
      });
  }

  logout(){
    this.authService.logout()
    .then(value => {
      console.log(this.authService.userDetails);
    //   this.loginForm.reset();
    })
    .catch(err => {
      this.errorMessage = "Something went wrong";
      console.log('Something went wrong:',err.message);
    });
  }
}
