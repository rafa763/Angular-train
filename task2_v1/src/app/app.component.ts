import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fruitsReceived: string[] = [];
  numberReceived = 0;

  onFruitReceived(fruitData: { fruitName: string }) {
    this.fruitsReceived.push(fruitData.fruitName);
    console.log('xxx', fruitData);
  }

  onNumberReceived(numberData: { numberValue: number }) {
    this.numberReceived = numberData.numberValue;
    console.log('yyyy', numberData);
  }
}
