import {ReduxActionWithPayload, ReduxReducer} from '@harmowatch/ngx-redux-core';
import {TodoListComponent} from './list/todo-list.component';
import {TodoState} from './state/todo-state.interface';
import {Todo} from './todo.interface';

export class TodoReducer {

  @ReduxReducer(TodoListComponent.prototype.add)
  add(state: TodoState, action: ReduxActionWithPayload<Todo>): TodoState {
    return {
      ...state,
      items: state.items.concat(action.payload),
    };
  }

  @ReduxReducer(TodoListComponent.prototype.remove)
  remove(state: TodoState, action: ReduxActionWithPayload<Todo>): TodoState {
    return {
      ...state,
      items: state.items.filter(todo => todo.uuid !== action.payload.uuid)
    };
  }

}
