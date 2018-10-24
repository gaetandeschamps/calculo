import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserAuthentifie } from '../loggedUserNameSpace';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router, private userService: UserServiceService) { }


  ngOnInit() {
    this.userService.getUsers();
    this.initForm();
    this.userForm = new FormGroup({
      nom: new FormControl
    });
  }

  initForm() {
    this.userForm = this.formbuilder.group({
      nom: ['', Validators.required]
    });
  }

  onSaveUser() {
    const nom = this.userForm.get('nom').value;
    const newUser = new User(nom);
    console.log('namespace' + UserAuthentifie.userLogged.name);

    let flag: Boolean = true; // utilisateur considéré comme nouveau, sauf si son nom existe déjà
    this.userService.users.forEach(element => {
      if (newUser.equals(element.name)) {
        flag = false;
        UserAuthentifie.userLogged = element;
        console.log('ancien user');
      }
    });

    if (flag) {
      this.userService.createNewUser(newUser);
      UserAuthentifie.userLogged = this.userService.users[this.userService.users.length - 1];
      console.log('nouveau user');
    }

    console.log('connexion namespace ' + UserAuthentifie.userLogged.name);

    this.router.navigate(['accueil']);
  }

}
