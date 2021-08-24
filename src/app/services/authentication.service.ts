import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;

    login(email: stringify, password: string): Promise
  }
}
