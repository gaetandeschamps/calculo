import { Component, OnInit } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html'
})
export class CalculComponent implements OnInit {

  private parameters;
  private userAnswer: number;
  private answerCheck: boolean;
  private nbredeVie = 2;
  private button: String;

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
    }
    this.userAnswer = null;
    this.button = 'Retenter ma chance !';
  }

  setCalcul() {
    this.nbredeVie = 2;
    this.userAnswer = null;
    this.answerCheck = null;
    this.button = 'Valider';
    this.parameters = this.calculService.setAddition(15);
    console.log(this.parameters);
  }

}
