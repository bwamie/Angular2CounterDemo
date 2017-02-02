import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: ['div.counter{ border: solid 1px green; font-size: 14px; font-weight: bold; width: 5%; }']
})

export class CounterComponent {
  counterValue: number;

  constructor() {
    this.counterValue = 0;
  }

  @Output() counterChanger = new EventEmitter();

  emitValue() {
    this.counterChanger.emit(this.counterValue);
  }

  incrementCount() {
    this.counterValue += 1;
    this.emitValue();
  }

  decrementCount() {
    this.counterValue -= 1;
    this.emitValue();
  }
}
