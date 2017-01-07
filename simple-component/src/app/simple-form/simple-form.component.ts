import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      simple-form Works!
    </p>
    <h1>{{msg}}</h1>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() msg;
  constructor() { }

  ngOnInit() {
  }

}
