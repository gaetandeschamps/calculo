import { Component, OnInit, Output, EventEmitter, Injectable, Input } from '@angular/core';
import { CalculService } from '../calcul.service';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html'
})

export class CalculComponent implements OnInit {

  @Output() nextQuestion = new EventEmitter<boolean>();

  @Input() difficulte: String;

  private parameters;
  private userAnswer: number;
  private answerCheck: boolean;
  private nbredeVie = 1;
  private boutonValider: String;
  private boutonCalculSuivant: String;
  private nbQuestion: number = 1;
  private range:number=1;
  private operationCase: number;

  constructor(
    private calculService: CalculService
  ) { }

  ngOnInit() {

    this.setRange(this.difficulte);
    this.setCalcul();
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
    this.operationCase = this.calculService.randomNumber(4);
    switch(this.operationCase){
      case 1:{
        this.parameters = this.calculService.setAddition(this.range);
        break;
      }
      case 2:{
        this.parameters = this.calculService.setSoustraction(this.range);
        break;
      }
      case 3:{
        this.parameters = this.calculService.setMultiplication(this.range);
        break;
      }
      case 4:{
        this.parameters = this.calculService.setDivison(this.range);
        break;
      }
    }    
    console.log(this.parameters);
  }

  nombreQuestion() {
    this.nbQuestion++;
    return this.nbQuestion;
  }

  setRange(difficulte) {
    if (difficulte === 'facile') {
      this.range = 15;
    } else if (difficulte === 'moyen') {
      this.range = 75;
    } else if (difficulte === 'difficile') {
      this.range = 1000;
    }
  }
  

}
