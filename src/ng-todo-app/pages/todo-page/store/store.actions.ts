import { ActionCreator, createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { TodoVisibilityFilter } from './store.state';

// See https://github.com/bazelbuild/rules_nodejs/issues/1013
// See https://github.com/microsoft/TypeScript/issues/26591
function myCreateAction<T extends string, P extends object>(
  type: T,
  config: {
    _as: 'props';
    _p: P;
  },
): ActionCreator<T, (props: P) => P & TypedAction<T>> {
  return createAction(type, config);
}

/** Action to add a new todo. */
export const addTodo = myCreateAction('[TODO] add', props<{ text: string }>());

/** Action to delete all completed todos. */
export const clearCompleted = myCreateAction('[TODO] clearCompleted', props());

/** Action to delete a todo. */
export const deleteTodo = myCreateAction(
  '[TODO] delete',
  props<{ id: string }>(),
);

/** Action to edit a todo's text value. */
export const editTodo = myCreateAction(
  '[TODO] edit',
  props<{ id: string; text: string }>(),
);

/** Action to set the visibility filter for the todo list. */
export const setVisibilityFilter = myCreateAction(
  '[TODO] setVisibilityFilter',
  props<{ visibilityFilter: TodoVisibilityFilter }>(),
);

/** Action to toggle all todo items as completed or uncompleted. */
export const toggleAllCompleted = myCreateAction(
  '[TODO] toggleAllCompleted',
  props(),
);

/** Action to toggle the todo as completed or uncompleted. */
export const toggleCompleted = myCreateAction(
  '[TODO] toggleCompleted',
  props<{ id: string }>(),
);

/** Action to toggle a todo as editable or not. */
export const toggleEditable = myCreateAction(
  '[TODO] toggleEditable',
  props<{ id: string }>(),
);
