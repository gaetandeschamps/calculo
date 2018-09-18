import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html'
})

export class CalculComponent implements OnInit {

  @Output() nextQuestion = new EventEmitter<boolean>();
  
  private parameters;
  private userAnswer: number;
  private answerCheck: boolean;
  private nbredeVie: number=1;
  private boutonValider: String;
  private boutonCalculSuivant: String;
  private nbQuestion: number=1;
  
  constructor(
    private calculService: CalculService
  ) { }

  ngOnInit() {
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
    if(this.nbQuestion === 10){
      this.boutonCalculSuivant = "Afficher les résultats";
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
    this.parameters = this.calculService.setAddition(15);
    console.log(this.parameters);    
  }

  nombreQuestion(){
    this.nbQuestion++;
    return this.nbQuestion;
  }


}
