import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable, of, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/user';

//https://firebase.google.com/docs/auth/web/password-auth

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<User>;
  userDetails: User = null;

  constructor(private firebaseAuth: AngularFireAuth,
              private db: AngularFirestore) { 

    firebaseAuth.authState.subscribe((user) => {
          if (user) {
            this.user = this.getUserDetails( user );
          } else {
            this.userDetails = null;
          }
        }
      );
  }

  /*
  initUser(){
    this.user = this.firebaseAuth.authState
          .pipe(
            switchMap((user) => {
              if (user) {
                return this.getUserDetails( user );
              } else {
                return of(null)
              }
            })
          );
  }
  */

  signup(email: string, password: string): Promise<any> {
    return this.firebaseAuth
          .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<any> {
      return this.firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then((credential) => {
                return this.getUserDetails( credential.user );
            });
  }

  private getUserDetails(user : firebase.User) : Observable<User>{
    return this.db.collection('users').doc<User>(user.uid)
          .get()
          .pipe(
            map((d) => {
                    console.log("getUserDetails() invoked");
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
    return this.firebaseAuth.signOut();
          // .then( d => {
          //   this.userDetails = null;
          //   }
          // );
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }

  isInRole(role) : boolean{
    return (this.userDetails?.role === role);
  }
}
