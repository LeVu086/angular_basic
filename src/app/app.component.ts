import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello PROJECT BASIC {{title}} </h1>
  <button (click)="onButtonClick($event)"> Hide border</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRIST PROJECT';

  onButtonClick(event: MouseEvent) {
    console.log('Button clicked!');
  }

}
