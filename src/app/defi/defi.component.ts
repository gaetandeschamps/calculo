import { Component, OnInit } from '@angular/core';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.replay();
    this.difficulte = Number(this.activatedRoute.snapshot.paramMap.get('difficulte'));
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
