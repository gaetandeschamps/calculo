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

  private nbQuestion: number;
  private nbGoodAnswers: number;
  private nbFalseAnswers: number;
  private difficulte: number;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserServiceService, private calculService: CalculService) {
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
    var that = this;
    if (that.nbQuestion == 11) {
      if (that.nbGoodAnswers > 8) { //alors stockage dans la BDD
        console.log("stockage BDD : " + score);
        that.userService.getUsers;
        var score: number[] = [0, 0, 0, 0];
        var difficulte: number = Number(that.difficulte);
        difficulte = difficulte + 1;
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
        console.log("stockage BDD : " + score);
        that.userService.saveScore(UserAuthentifie.userLogged, score);
      }
    }
    console.log("stockage BDD 22222 : " + that.nbQuestion);
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
