import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {ReduxModule} from '@harmowatch/ngx-redux-core';

import {TodoStateProvider} from './state/todo-state.provider';
import {TodoListComponent} from './list/todo-list.component';
import {TodoReducer} from './todo.reducer';
import {TodoListReducer} from './list/todo-list.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReduxModule.forChild({
      state: {
        provider: TodoStateProvider,
        reducers: [TodoReducer, TodoListReducer],
      }
    }),
    RouterModule.forChild([
      {path: 'list', component: TodoListComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ])
  ],
  providers: [TodoStateProvider],
  declarations: [TodoListComponent]
})
export class TodoModule {
}
