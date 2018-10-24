import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserAuthentifie } from '../loggedUserNameSpace';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  profilUtilisateur: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.profilUtilisateur = UserAuthentifie.userLogged;
  }

  deconnexionDuUser() {
    UserAuthentifie.userLogged = new User('ERREUR');
    this.router.navigate(['accueil']);
  }
}