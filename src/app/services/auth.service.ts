import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/user';

//https://firebase.google.com/docs/auth/web/password-auth

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: Observable<firebase.User>;
  user: Observable<User>;

  constructor(private firebaseAuth: AngularFireAuth,
              private db: AngularFirestore) { 

    this.initUser();
  }

  initUser(){
    this.user = this.firebaseAuth.authState
          .pipe(
            switchMap(user => {
              if (user) {
                //return this.db.collection('users').doc<User>(user.uid).valueChanges()
                return this.getUserDetails( user );
              } else {
                return of(null)
              }
            })
          );
  }

  signup(email: string, password: string): Promise<any> {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<any> {
      return this.firebaseAuth
                .signInWithEmailAndPassword(email, password)
                .then((credential) => {
                    this.user = this.getUserDetails( credential.user );
                });
  }

  private getUserDetails(user : firebase.User) : Observable<User>{
    return this.db.collection('users').doc<User>(user.uid)
          .get()
          .pipe(
            map((d) => {
                    return {
                      id: user.uid,
                      email: user.email,
                      ...d.data() //email, role
                    }
                }
              )
            );
  }

  logout(): Promise<any> {
    return this.firebaseAuth.signOut()
            .then( d => {
                this.initUser();
              }
            );
  }

  // isInRole(role) : boolean{
  //   reurn 
  // }
}
