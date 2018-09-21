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
  private difficulte:string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
          this.difficulte = params['difficulte'];
          console.log(this.difficulte); // Print the parameter to the console. 
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

}
