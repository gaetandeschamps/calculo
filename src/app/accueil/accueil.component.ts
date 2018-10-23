import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { CalculService } from '../calcul.service';
import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit, OnDestroy {

  private choixOperations = [];
  private difficulte: number;

  constructor(
    private calculService: CalculService
  ) { }

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
    $('.my_tooltip').tooltip({ html: true });
  }

  addOperation(operation: string) {
    if (this.choixOperations.includes(operation)) {
      this.choixOperations.splice(this.choixOperations.indexOf(operation), 1);
    } else {
      this.choixOperations.push(operation);
    }
  }

  setDifficulty(difficulteChosen: number) {
    this.difficulte = difficulteChosen;
  }

  ngOnDestroy() {
    this.calculService.choixOperations = this.choixOperations;
  }
}


