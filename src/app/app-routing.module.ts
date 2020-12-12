import { ShowPepperComponent } from './components/show-pepper/show-pepper.component';
import { EditPepperComponent } from './components/edit-pepper/edit-pepper.component';
import { LoginComponent } from './components/login/login.component';
import { PeppersComponent } from './components/peppers/peppers.component';
import { P404Component } from './components/p404/p404.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  
  {path:'peppers', component: PeppersComponent},
  {path:'peppers/:id', component: ShowPepperComponent},
  
  {path:'edit/pepper', component: EditPepperComponent},
  {path:'edit/pepper/:id', component: EditPepperComponent},

  {path:'login', component: LoginComponent},
  {path:'', component: HomeComponent, pathMatch: 'full'},
  
  {path: '404', component: P404Component},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
