import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.css',
})
export class CompTwoComponent {
  constructor(private dataService: DataService) {
    this.dataService.fruitAddedEvent.subscribe((fruit: string) => {
      this.dataService.addFruit(fruit);
    });

    this.dataService.numberAssignedEvent.subscribe((number: number) => {
      this.dataService.assignNumber(number);
    });
  }

  getNumber() {
    return this.dataService.number;
  }

  isPrime() {
    return this.dataService.isPrime(this.dataService.number);
  }

  getFruits() {
    return this.dataService.fruits;
  }
}
