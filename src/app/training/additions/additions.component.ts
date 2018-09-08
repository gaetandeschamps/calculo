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
    }
  }

  setCalcul() {
    this.userAnswer = null;
    this.answerCheck = null;
    this.randomNumbers = this.calculService.generateRandomNumbers(15);
    this.answer = this.randomNumbers[0] + this.randomNumbers[1];
  }

}
