import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponent {
  fruitName: string = '';
  fruits: string[] = [];
  primeNumber: number = 0;

  @Output() numberAdded: EventEmitter<number> = new EventEmitter<number>();

  sendNumber() {
    this.numberAdded.emit(this.primeNumber);
  }

  addItem() {
    if (this.fruitName.trim() !== '') {
      this.fruits.push(this.fruitName);
      this.fruitName = '';
    }
  }
}
