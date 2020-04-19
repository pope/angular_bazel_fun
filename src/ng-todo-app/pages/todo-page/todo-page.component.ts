import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo } from './store/store.actions';
import { Todo, TODO_STORE_STATE, TodoStoreState } from './store/store.state';

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
    private readonly store: Store<{
      readonly [TODO_STORE_STATE]: TodoStoreState;
    }>,
  ) {}

  readonly todos$: Observable<ReadonlyArray<Todo>> = this.store.pipe(
    select((state) => state[TODO_STORE_STATE].todos),
  );

  addTodo() {
    this.store.dispatch(addTodo({ text: '' }));
  }
}
