import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.css',
})
export class CompOneComponent {
  fruit: string = '';
  number: number = 0;

  constructor(private dataService: DataService) {}

  addFruit() {
    this.dataService.fruitAddedEvent.emit(this.fruit);
  }

  addNumber() {
    this.dataService.numberAssignedEvent.emit(this.number);
  }
}
