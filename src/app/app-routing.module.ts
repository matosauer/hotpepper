import { LoginComponent } from './components/login/login.component';
import { RamblingsComponent } from './components/ramblings/ramblings.component';
import { PeppersComponent } from './components/peppers/peppers.component';
import { P404Component } from './components/p404/p404.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  
  {path:'peppers', component: PeppersComponent},
  {path:'ramblings', component: RamblingsComponent},
  {path:'login', component: LoginComponent},

  {path: '404', component: P404Component},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
