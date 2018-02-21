import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ReduxModule} from '@harmowatch/ngx-redux-core';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReduxModule.forRoot(),
    RouterModule.forRoot([
      {path: 'todo', loadChildren: './todo/todo.module#TodoModule'},
      {path: '', redirectTo: 'todo', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
