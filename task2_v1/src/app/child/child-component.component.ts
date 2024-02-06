import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponent {
  inputText: string = '';
  @Input() buttonText: string = '';
  @Input() holderText: string = '';

  @Output() inputAdded: EventEmitter<string> = new EventEmitter<string>();

  onSendInput() {
    this.inputAdded.emit(this.inputText);
  }
}
