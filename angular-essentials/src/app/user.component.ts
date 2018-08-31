import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-user',
  template: `
  <input type="text" (input)="onUserInput($event)" [value]="name">
  <p>Hello {{ name }}!</p>
  <p>I'm the user component</p>
  <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    this.nameChanged.emit(event.target.value);
  }
}


// the longer version
// onUserInput(input)="onUserInput($event)" [value]="name"

// onUserInput(event) {
//   this.name = event.target.value;
// }

// <input type="text" [(ngModel)]="name">
