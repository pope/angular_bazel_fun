import { Component } from '@angular/core';

@Component({
  selector: 'todo-page',
  templateUrl: 'todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  host: {
    'class': 'mat-elevation-z1',
  },
})
export class TodoPageComponent {
}
