import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Shahram';
  elements: number[] = [];

  onChangeName() {
    this.name = "Bob";
  }

  onAddElement() {
    this.elements.push(this.elements.length + 1);
  }

  getColor(element) {

  }


}
