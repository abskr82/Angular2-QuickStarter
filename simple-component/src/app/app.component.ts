import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doOnClick(event, value) {
    console.log('Clicked and event is ' + event);
    console.log('Clicked and value is ' + value);
  }
}
