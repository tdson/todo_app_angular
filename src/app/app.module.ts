import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';

import {RoutesModule} from './config/routes.module';

import {TodoService} from './services/todo.service';
import { IndexTodoComponent } from './index-todo/index-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTodoComponent,
    IndexTodoComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
