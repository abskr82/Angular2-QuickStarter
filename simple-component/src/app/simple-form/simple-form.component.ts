import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: ` <div>
  <input #myInput type="text" [(ngModel)]="msg">
  <button (click)="update.emit({text:msg})">Click Me</button>
</div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() msg;
  @Output() update = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
