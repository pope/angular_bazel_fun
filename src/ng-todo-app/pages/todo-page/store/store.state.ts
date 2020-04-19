/** The data model of an individual todo. */
export interface Todo {
  readonly id: string;
  readonly text: string;
  readonly status: number;
}

/** A bitmask enum for the various todo status states. */
export enum TodoStatus {
  None = 0,
  Completed = 1 << 0,
  Editable = 1 << 1,
}

/** The various ways to filter the display of todos. */
export enum TodoVisibilityFilter {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
}

/** The todo list state. */
export interface TodoStoreState {
  readonly nextTodoId: number;
  readonly todos: readonly Todo[];
  readonly visibilityFilter: TodoVisibilityFilter;
}

/** The key for the todos in the Store. */
export const TODO_STORE_STATE = 'todos';
