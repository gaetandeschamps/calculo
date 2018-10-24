import { Component, OnInit } from '@angular/core';
import { UserAuthentifie } from '../loggedUserNameSpace';
import { UserServiceService } from '../user-service.service';
import { CalculService } from '../calcul.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-defi',
  templateUrl: './defi.component.html',
  styles: []
})
export class DefiComponent implements OnInit {

   nbQuestion: number;
   nbGoodAnswers: number;
   nbFalseAnswers: number;
   difficulte: number;

  constructor(public activatedRoute: ActivatedRoute, public userService: UserServiceService, public calculService: CalculService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.difficulte = params['difficulte'];
    });
  }


  ngOnInit() {
    this.replay();
    this.difficulte = Number(this.activatedRoute.snapshot.paramMap.get('difficulte')) - 1;
  }

  nextQuestion(answerType: boolean) {
    answerType ? this.nbGoodAnswers++ : this.nbFalseAnswers++;
    this.nbQuestion++;
  }

  stockageScore() {
    const that = this;
    if (that.nbQuestion === 11) {
      if (that.nbGoodAnswers > 8) { // alors stockage dans la BDD
        const score: number[] = [0, 0, 0, 0];
        console.log('stockage BDD : ' + score);
        that.userService.getUsers();
        const difficulte: number = Number(that.difficulte);
        this.difficulte = difficulte + 1;
        that.calculService.choixOperations.forEach(element => {
          switch (element) {
            case 'addition': {
              score[0] = difficulte;
              break;
            }
            case 'soustraction': {
              score[1] = difficulte;
              break;
            }
            case 'multiplication': {
              score[2] = difficulte;
              break;
            }
            case 'division': {
              score[3] = difficulte;
              break;
            }
          }
        });
        console.log('stockage BDD : ' + score);
        that.userService.saveScore(UserAuthentifie.userLogged, score);
      }
    }
    console.log('stockage BDD 22222 : ' + that.nbQuestion);
    that.replay();
  }

  replay() {
    this.nbQuestion = 1;
    this.nbGoodAnswers = 0;
    this.nbFalseAnswers = 0;
  }

  niveauSuivant() {
    this.difficulte++;
    this.replay();
  }
}
