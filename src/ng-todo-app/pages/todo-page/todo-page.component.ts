import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from './store/store.actions';
import { TODO_STORE_STATE, TodoStoreState } from './store/store.state';

@Component({
  selector: 'todo-page',
  templateUrl: 'todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  host: {
    class: 'mat-elevation-z1',
  },
})
export class TodoPageComponent {
  constructor(
    private readonly store: Store<{ [TODO_STORE_STATE]: TodoStoreState }>,
  ) {}

  addTodo() {
    this.store.dispatch(addTodo({ text: '' }));
  }
}
