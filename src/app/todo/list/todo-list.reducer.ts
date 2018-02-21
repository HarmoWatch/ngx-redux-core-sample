import {ReduxReducer} from '@harmowatch/ngx-redux-core';

import {TodoListComponent} from './todo-list.component';
import {TodoState} from '../state/todo-state.interface';
import {TodoListMode} from './todo-list-mode.enum';

export class TodoListReducer {

  @ReduxReducer(TodoListComponent.prototype.toggleListMode)
  todoListMode(state: TodoState): TodoState {
    return {
      ...state,
      list: {
        ...state.list,
        mode: state.list.mode === TodoListMode.DEBUG ? TodoListMode.TABLE : TodoListMode.DEBUG,
      }
    };
  }

}
