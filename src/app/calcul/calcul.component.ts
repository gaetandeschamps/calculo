import { Component, OnInit, Output, EventEmitter, Injectable, Input } from '@angular/core';
import { CalculService } from '../calcul.service';
import * as globals from '../globals';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html'
})

export class CalculComponent implements OnInit {

  @Output() nextQuestion = new EventEmitter<boolean>();

  @Input() difficulte: number;

  private parameters;
  private userAnswer: number;
  private answerCheck: boolean;
  private nbredeVie = 1;
  private boutonValider: String;
  private boutonCalculSuivant: String;
  private nbQuestion = 1;
  private range = 1;
  private operationCase: number;

  constructor(
    private calculService: CalculService
  ) { }

  ngOnInit() {

    // this.setRange(this.difficulte);
    this.setCalcul();
    console.log(this.difficulte);
    console.log(globals.ADDITION_RANGES[this.difficulte]);
  }

  additionAnswer() {
    if (this.userAnswer === this.parameters.answer) {
      this.answerCheck = true;
    } else {
      this.answerCheck = false;
      this.nbredeVie--;
      this.boutonValider = 'Retenter ma chance !';
    }
    if (this.nbQuestion === 10) {
      this.boutonCalculSuivant = 'Afficher les résultats';
    }
    this.userAnswer = null;
  }

  setCalcul() {

    if (this.answerCheck === true) {
      this.nextQuestion.emit(true);
    } else if (this.answerCheck === false) {
      this.nextQuestion.emit(false);
    }

    this.nbredeVie = 2;
    this.userAnswer = null;
    this.answerCheck = null;
    this.boutonValider = 'Valider';
    this.boutonCalculSuivant = 'Calcul Suivant';
    // this.operationCase = this.calculService.randomNumber(4);
    this.operationCase = Math.floor((Math.random() * 4) + 1);
    switch (this.operationCase) {
      case 1: {
        // this.parameters = this.calculService.setAddition(this.range);
        // tslint:disable-next-line:max-line-length
        this.parameters = this.calculService.setAddition(globals.ADDITION_RANGES[this.difficulte][0], globals.ADDITION_RANGES[this.difficulte][1]);
        break;
      }
      case 2: {
        // this.parameters = this.calculService.setSoustraction(this.range);
        // tslint:disable-next-line:max-line-length
        this.parameters = this.calculService.setSoustraction(globals.SOUSTRACTION_RANGES[this.difficulte][0], globals.SOUSTRACTION_RANGES[this.difficulte][1]);
        break;
      }
      case 3: {
        // this.parameters = this.calculService.setMultiplication(this.range);
        // tslint:disable-next-line:max-line-length
        this.parameters = this.calculService.setMultiplication(globals.MULTIPLICATION_RANGES[this.difficulte][0], globals.MULTIPLICATION_RANGES[this.difficulte][1]);
        break;
      }
      case 4: {
        // this.parameters = this.calculService.setDivison(this.range);
        // tslint:disable-next-line:max-line-length
        this.parameters = this.calculService.setDivison(globals.DIVISION_RANGES[this.difficulte][0], globals.DIVISION_RANGES[this.difficulte][1]);
        break;
      }
    }
    console.log(this.parameters);
  }

  nombreQuestion() {
    this.nbQuestion++;
    return this.nbQuestion;
  }

  // setRange(difficulte) {
  //   if (difficulte === 'facile') {
  //     this.range = 15;
  //   } else if (difficulte === 'moyen') {
  //     this.range = 75;
  //   } else if (difficulte === 'difficile') {
  //     this.range = 1000;
  //   }
  // }
}
