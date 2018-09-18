import { Component, OnInit } from '@angular/core';
import { CalculService } from '../../calcul.service';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.css']
})
export class AdditionsComponent implements OnInit {

  private randomNumbers: number[];
  private answer: number;
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
    if (this.userAnswer === this.answer) {
      this.answerCheck = true;
    } else {
      this.answerCheck = false;
      this.nbredeVie--;
      this.button = 'Retenter ma chance !';
    }
    this.userAnswer = null;
  }

  setCalcul() {
    this.nbredeVie = 2;
    this.userAnswer = null;
    this.answerCheck = null;
    this.randomNumbers = this.calculService.generateRandomNumbers(15);
    this.answer = this.randomNumbers[0] + this.randomNumbers[1];
    this.button = 'Valider';
  }

}
