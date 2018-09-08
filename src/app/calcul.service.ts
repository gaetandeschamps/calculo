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

}
