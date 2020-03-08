import { Action, createReducer, on } from '@ngrx/store';
import {
  TodoStoreState,
  TodoVisibilityFilter,
  TodoStatus,
} from './store.state';
import {
  addTodo,
  clearCompleted,
  deleteTodo,
  editTodo,
  setVisibilityFilter,
  toggleAllCompleted,
  toggleCompleted,
  toggleEditable,
} from './store.actions';

const initialState: TodoStoreState = {
  nextTodoId: 0,
  todos: [],
  visibilityFilter: TodoVisibilityFilter.SHOW_ALL,
};

const reducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => ({
    ...state,
    nextTodoId: state.nextTodoId + 1,
    todos: [
      ...state.todos,
      {
        id: `todo-${state.nextTodoId}`,
        text: text,
        status: TodoStatus.None,
      },
    ],
  })),
  on(clearCompleted, state => ({
    ...state,
    todos: state.todos.filter(t => t.status & TodoStatus.Completed),
  })),
  on(deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(t => t.id === id),
  })),
  on(editTodo, (state, { id, text }) => ({
    ...state,
    todos: state.todos.map(t => {
      if (t.id !== id) {
        return t;
      }
      return {
        ...t,
        text,
        status: t.status & ~TodoStatus.Editable,
      };
    }),
  })),
  on(setVisibilityFilter, (state, { visibilityFilter }) => ({
    ...state,
    visibilityFilter,
  })),
  on(toggleAllCompleted, state => {
    if (state.todos.every(t => t.status & TodoStatus.Completed)) {
      return {
        ...state,
        todos: state.todos.map(t => ({
          ...t,
          status: t.status & ~TodoStatus.Completed,
        })),
      };
    }
    return {
      ...state,
      todos: state.todos.map(t => {
        if (t.status & TodoStatus.Completed) {
          return t;
        }
        return {
          ...t,
          status: t.status | TodoStatus.Completed,
        };
      }),
    };
  }),
  on(toggleCompleted, (state, { id }) => ({
    ...state,
    todos: state.todos.map(t => {
      if (t.id !== id) {
        return t;
      }
      return {
        ...t,
        status: t.status ^ TodoStatus.Completed,
      };
    }),
  })),
  on(toggleEditable, (state, { id }) => ({
    ...state,
    todos: state.todos.map(t => {
      if (t.id !== id) {
        return t;
      }
      return {
        ...t,
        status: t.status ^ TodoStatus.Editable,
      };
    }),
  })),
);

export function todoStoreReducer(
  state = initialState,
  action: Action,
): TodoStoreState {
  return reducer(state, action);
}
