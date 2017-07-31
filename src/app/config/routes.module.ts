import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from '../app.component';
import {ShowTodoComponent} from '../show-todo/show-todo.component';
import {IndexTodoComponent} from '../index-todo/index-todo.component';

const routes: Routes = [
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: 'todos', component: IndexTodoComponent},
  {path: 'todos/:id', component: ShowTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}
