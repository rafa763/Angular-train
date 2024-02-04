import { EventEmitter } from '@angular/core';

export class DataService {
  number: number = 0;
  fruits: string[] = [];

  fruitAddedEvent = new EventEmitter<string>();
  numberAssignedEvent = new EventEmitter<number>();

  addFruit(fruit: string) {
    this.fruits.push(fruit);
  }

  assignNumber(number: number) {
    this.number = number;
  }

  isPrime(num: number) {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }
}
