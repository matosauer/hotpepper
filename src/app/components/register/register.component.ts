import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  errorMessage:string;
  successMessage: string;

  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;
  name: FormControl;

  constructor(private authService: AuthService) { 
    this.authService.user.subscribe(u => {
        this.user = u;
      });
  }

  ngOnInit(): void {
    this.email = new FormControl("", [Validators.required]);
    this.password = new FormControl("", [Validators.required]);
    this.name = new FormControl("", [Validators.required]);

    this.registerForm = new FormGroup({
      'email': this.email,
      'password': this.password,
      'name': this.name
    });
  }

  register(): void{
    this.authService.signup(this.email.value, this.password.value, this.name.value)
      .then(value => {
        this.errorMessage = "";
        this.successMessage = "You have successfully registered and logged in.";
        this.registerForm.reset();
      })
      .catch(err => {
        this.errorMessage = err.message;
        console.log('Something went wrong:', err.message);
      });
  }


}
