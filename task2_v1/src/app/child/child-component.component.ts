import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponent {
  @Input() fruitsx: string[] = [];
  @Input() receivedNumber!: number;

  // create an array populated with 5 fruits
  theFruits: string[] = ['apple', 'banana', 'cherry', 'date', 'kiwi'];

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
}
