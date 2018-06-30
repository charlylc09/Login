import { Injectable } from '@angular/core';

//importaciones
import{AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  registerUser(email: string, pass: string){
    return new Promise(
      (resolve, reject) => 
        {
          this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
          .then(userData => resolve(userData))
          .catch(error => reject(error))
        }
    );
  }

  loginEmail(email: string, pass: string){
    return new Promise(
      (resolve, reject) => 
        {
          this.afAuth.auth.signInWithEmailAndPassword(email, pass)
          .then(userData => resolve(userData))
          .catch(error => reject(error))
        }
    );
  }

  getAuth(){
    return this.afAuth.authState.pipe(map (datos => datos))
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
  
}
