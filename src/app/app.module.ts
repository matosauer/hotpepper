import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeppersComponent } from './components/peppers/peppers.component';
import { LoginComponent } from './components/login/login.component';
import { P404Component } from './components/p404/p404.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

// Reactive Form Module
import { ReactiveFormsModule } from '@angular/forms';
import { EditPepperComponent } from './components/edit-pepper/edit-pepper.component';
import { ShowPepperComponent } from './components/show-pepper/show-pepper.component';

import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuardService } from './services/admin-guard.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { BoardComponent } from './components/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeppersComponent,
    LoginComponent,
    P404Component,
    EditPepperComponent,
    ShowPepperComponent,
    RegisterComponent,
    UserDetailsComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    ReactiveFormsModule
  ],
  providers: [AuthService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
