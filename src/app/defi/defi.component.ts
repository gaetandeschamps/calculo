import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.difficulte = Number(params['difficulte']);
    });
  }

  ngOnInit() {
    this.replay();
  }

  nextQuestion(answerType: boolean) {
    answerType ? this.nbGoodAnswers++ : this.nbFalseAnswers++;
    this.nbQuestion++;
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
