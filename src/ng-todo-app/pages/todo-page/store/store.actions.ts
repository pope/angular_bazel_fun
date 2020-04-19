import { ActionCreator, createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { TodoVisibilityFilter } from './store.state';

/** Action to add a new todo. */
export const addTodo = createAction('[TODO] add', props<{ text: string }>());

/** Action to delete all completed todos. */
export const clearCompleted = createAction('[TODO] clearCompleted', props());

/** Action to delete a todo. */
export const deleteTodo = createAction(
  '[TODO] delete',
  props<{ id: string }>(),
);

/** Action to edit a todo's text value. */
export const editTodo = createAction(
  '[TODO] edit',
  props<{ id: string; text: string }>(),
);

/** Action to set the visibility filter for the todo list. */
export const setVisibilityFilter = createAction(
  '[TODO] setVisibilityFilter',
  props<{ visibilityFilter: TodoVisibilityFilter }>(),
);

/** Action to toggle all todo items as completed or uncompleted. */
export const toggleAllCompleted = createAction(
  '[TODO] toggleAllCompleted',
  props(),
);

/** Action to toggle the todo as completed or uncompleted. */
export const toggleCompleted = createAction(
  '[TODO] toggleCompleted',
  props<{ id: string }>(),
);

/** Action to toggle a todo as editable or not. */
export const toggleEditable = createAction(
  '[TODO] toggleEditable',
  props<{ id: string }>(),
);
