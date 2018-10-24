import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  public choixOperations: string[];

  constructor() { }

  randomNumber(min: number, max: number) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  setAddition(min: number, max: number) {
    const firstNumber: number = this.randomNumber(min, max);
    const secondNumber: number = this.randomNumber(min, max);
    const answer: number = firstNumber + secondNumber;
    const calculParameters = {
      'firstNumber': firstNumber,
      'secondNumber': secondNumber,
      'answer': answer,
      'title': 'Résous l\'addition',
      'operator': '+'
    };
    return calculParameters;
  }

  setSoustraction(difficulte: number, min: number, max: number) {
    const firstNumber: number = this.randomNumber(min, max);
    let secondNumber;
    if (difficulte <= 2) {
      secondNumber = this.randomNumber(min, firstNumber);
    } else {
      secondNumber = this.randomNumber(min, max);
    }
    const answer: number = firstNumber - secondNumber;
    const calculParameters = {
      'firstNumber': firstNumber,
      'secondNumber': secondNumber,
      'answer': answer,
      'title': 'Résous la soustraction',
      'operator': '-'
    };
    return calculParameters;
  }

  setMultiplication(min: number, max: number) {
    const firstNumber: number = this.randomNumber(min, max);
    const secondNumber: number = this.randomNumber(min, max);
    const answer: number = firstNumber * secondNumber;
    const calculParameters = {
      'firstNumber': firstNumber,
      'secondNumber': secondNumber,
      'answer': answer,
      'title': 'Résous la multiplication',
      'operator': 'x'
    };
    return calculParameters;
  }

  setDivison(min: number, max: number, numeratorMultiplicator: number) {
    let secondNumber: number = this.randomNumber(min, max);
    const firstNumber: number = secondNumber * (Math.floor((Math.random() * numeratorMultiplicator) + 1));
    secondNumber = Math.abs(secondNumber);
    const answer: number = firstNumber / secondNumber;
    const calculParameters = {
      'firstNumber': firstNumber,
      'secondNumber': secondNumber,
      'answer': answer,
      'title': 'Résous la division',
      'operator': '÷'
    };
    return calculParameters;
  }

}
