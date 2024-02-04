import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.css',
})
export class CompTwoComponent {
  fruit: string = '';
  number: number = 0;

  @Output() fruitCreated = new EventEmitter<{
    fruitName: string;
  }>();

  @Output() numberCreated = new EventEmitter<{
    numberValue: number;
  }>();

  onAddFruit() {
    // console.log('Fruit added: ' + this.fruit);
    this.fruitCreated.emit({
      fruitName: this.fruit,
    });
  }

  onAddNumber() {
    // console.log('Number added: ' + this.number);
    this.numberCreated.emit({
      numberValue: this.number,
    });
  }
}
