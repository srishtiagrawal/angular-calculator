import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  longButtons = ['AC', 'CE'];
  buttons = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, '=', '+'];
  result = '';
  calc($event) {
    var button = $event.srcElement.innerText;
    if (button === '=') {
      this.result = eval(this.result);
    } else if (button === 'AC') {
      this.result = ' ';
    } else if (button === 'CE') {
      this.result = this.result.slice(0, -1);
    } else {
      this.result += button;
    }
  }
}
