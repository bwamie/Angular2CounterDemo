import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter: number;
  constructor() {
    this.counter = 0;
  }
  setCounter(counter) {
    this.counter = counter;
  }
}
