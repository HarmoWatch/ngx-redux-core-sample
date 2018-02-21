import {v4} from 'uuid';
import {Component} from '@angular/core';
import {ReduxAction, ReduxActionContext} from '@harmowatch/ngx-redux-core';

import {Todo} from '../todo.interface';
import {TodoListMode} from "./todo-list-mode.enum";

@Component({
  selector: 'app-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
@ReduxActionContext({prefix: 'TodoListComponent://'})
export class TodoListComponent {

  public readonly TodoListMode = TodoListMode;

  constructor() {
  }

  @ReduxAction()
  toggleListMode() {

  }

  @ReduxAction()
  add(label: string): Todo {
    return {
      uuid: v4(),
      label,
      creationDate: new Date().toISOString(),
    };
  }

  @ReduxAction()
  remove(todo: Todo) {
    return todo;
  }

}
