import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.css',
})
export class CompOneComponent {
  @Input('fruitName') name: string = '';
  @Input('primeNumber') number: number = 0;

  isPrime(num: number) {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }
}
