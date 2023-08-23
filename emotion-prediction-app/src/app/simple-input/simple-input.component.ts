import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
})
export class SimpleInputComponent {
  textInput: string = '';

  displayText() {
    console.log(this.textInput);
  }
}
