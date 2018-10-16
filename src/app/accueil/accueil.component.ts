import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalculService } from '../calcul.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, OnDestroy {

  private choixOperations = [];

  constructor(
    private calculService: CalculService
  ) { }

  ngOnInit() {
  }

  addOperation(operation: string) {
    if (this.choixOperations.includes(operation)) {
      this.choixOperations.splice(this.choixOperations.indexOf(operation), 1);
    } else {
      this.choixOperations.push(operation);
    }
  }

  ngOnDestroy() {
    this.calculService.choixOperations = this.choixOperations;
  }
}
