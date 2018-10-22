import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../models/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  userForm : FormGroup;
  
  constructor(private formbuilder : FormBuilder, private router: Router, private userService : UserServiceService) { }

  

  ngOnInit() {
    this.initForm;
    this.userForm = new FormGroup({
      nom: new FormControl
    });  
  }

  initForm(){
    this.userForm = this.formbuilder.group({
        nom: ['', Validators.required]
    });
  }

  onSaveUser(){
    const nom=this.userForm.get('nom').value;
    const newUser= new User(nom);
    console.log(this.userService.getUsers());
   
    //this.userService.createNewUser(newUser);
    //this.router.navigate(['accueil']);
  }

}
