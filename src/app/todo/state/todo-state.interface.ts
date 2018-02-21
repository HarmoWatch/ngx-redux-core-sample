import {Todo} from '../todo.interface';
import {TodoListState} from '../list/state/todo-list-state.interface';

export interface TodoState {
  items: Todo[];
  list: TodoListState;
}
