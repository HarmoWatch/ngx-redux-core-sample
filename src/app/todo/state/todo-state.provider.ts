import {ReduxState, ReduxStateProvider} from '@harmowatch/ngx-redux-core';
import {TodoState} from './todo-state.interface';
import {TodoListMode} from '../list/todo-list-mode.enum';

@ReduxState({name: 'todo'})
export class TodoStateProvider extends ReduxStateProvider<TodoState> {

  public static readonly default: TodoState = {
    items: [],
    list: {
      mode: TodoListMode.DEBUG,
    }
  };

  getInitialState(): TodoState {
    return TodoStateProvider.default;
  }

}
