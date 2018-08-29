import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Shahram';
  elements: number[] = [];
  message: '';

  onChangeName() {
    this.name = "Bob";
  }

  onAddElement() {
    this.elements.push(this.elements.length + 1);
  }

  getColor(element: number) {
    return element % 2 === 0 ? 'green' : 'red';
  }

  onUserwasClicked(usrName: string) {
    alert(usrName);
  }
}
