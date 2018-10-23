import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalculService } from '../calcul.service';
import { UserServiceService } from '../user-service.service';
import { User } from 'firebase';
import { UserAuthentifie } from '../loggedUserNameSpace';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {

  private choixOperations = [];
  private loggedUser:User=null;

  constructor(
    private calculService: CalculService,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.checkIfUserAuthenticated();
  }

  checkIfUserAuthenticated(): void {
    console.log("namespace"+UserAuthentifie.userLogged.name);
    this.loggedUser=this.loggedUser;
  }

  loggedUserIsTrue():Boolean{
    return UserAuthentifie.userLogged.name!="ERREUR";
  }

  addOperation(operation: string) {
    if (this.choixOperations.includes(operation)) {
      this.choixOperations.splice(this.choixOperations.indexOf(operation), 1);
    } else {
      this.choixOperations.push(operation);
    }
  }

  ngOnDestroy() {
    this.calculService.choixOperations = this.choixOperations;
  }
}
