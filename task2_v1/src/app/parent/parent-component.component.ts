import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['parent-component.component.css'],
})
export class ParentComponent {
  receivedNumber!: number;
  fruits: string[] = [];

  theFruits: string[] = ['apple', 'banana', 'cherry', 'date', 'kiwi', 'mango'];

  onFruitReceived(fruit: string) {
    fruit.trim();
    if (fruit !== '') {
      this.fruits.push(fruit.toLowerCase());
    }
  }

  isFruit(fruit: string): boolean {
    return this.theFruits.includes(fruit.toLowerCase());
  }

  isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  onNumberReceived(num: string) {
    this.receivedNumber = +num;
  }
}
