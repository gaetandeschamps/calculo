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

  setSoustraction(min: number, max: number) {
    const firstNumber: number = this.randomNumber(min, max);
    const secondNumber: number = this.randomNumber(min, max);
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

  setDivison(min: number, max: number) {
    // const secondNumber: number = this.randomNumber(range);
    // const firstNumber: number = secondNumber * this.randomNumber(range);
    const firstNumber: number = this.randomNumber(min, max);
    const secondNumber: number = this.getRandomItemInArray(this.findDivisors(firstNumber));
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

  findDivisors(n: number) {
    const divisors: number[] = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (n / i === i) {
          divisors.push(i);
        } else {
          divisors.push(i);
          divisors.push(n / i);
        }
      }
    }
    return divisors;
  }

  getRandomItemInArray(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

}
