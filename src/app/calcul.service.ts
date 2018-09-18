import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  generateRandomNumbers(range: number) {
    const randomNumbers = [];
    randomNumbers.push(Math.floor((Math.random() * range) + 1));
    randomNumbers.push(Math.floor((Math.random() * range) + 1));
    return randomNumbers;
  }

  randomNumber(range: number) {
    return Math.floor((Math.random() * range) + 1);
  }

  setAddition(range: number) {
    const firstNumber: number = this.randomNumber(range);
    const secondNumber: number = this.randomNumber(range);
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

}
