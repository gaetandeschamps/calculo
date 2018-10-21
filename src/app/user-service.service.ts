import { Injectable } from '@angular/core';
import {User} from './models/user.model'
import { Subject} from 'rxjs';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: User[]=[];
  userSubject=new Subject<User[]>();

  emitUser(){
    this.userSubject.next(this.users);
  }

  saveUsers(){
    firebase.database().ref('/users').set(this.users);
  }

  getUsers(){
    firebase.database().ref('/users')
      .on('value', (data: Datasnapshot) => {
        this.users = data.val() ? data.val() : [];
        this.emitUser();
      }
    );
  }

  getSingleUser(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/users/' + id).once('value').then(
          (data: Datasnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  constructor(){
    this.getUsers();
  }

  createNewUser(newUser: User) {
    this.users.push(newUser);
    this.saveUsers();
    this.emitUser();
  }

  removeUser(user: User) {
    const userIndexToRemove = this.users.findIndex(
      (bookEl) => {
        if(bookEl === user) {
          return true;
        }
      }
    );
    this.users.splice(userIndexToRemove, 1);
    this.saveUsers();
    this.emitUser();
  }
  
}
