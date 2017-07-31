import { Component, OnInit } from '@angular/core';

import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Todo List';
  // todos: Todo[];
  // selectedTodo: Todo;
  //
  // constructor(private todoService: TodoService) {}
  //
  ngOnInit(): void {
    // this.todoService.index().then(todos => this.todos = todos);

    axios.defaults.headers.common['Authorization'] = 'bearer 7ce021b9a6e1dec6067761971c145fbeb76fcd568f1004eab2962eecb9834a38';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }
  //
  // onSelect(todo: Todo): void {
  //   this.selectedTodo = todo;
  // }
}
