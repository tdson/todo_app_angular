import { Component, OnInit } from '@angular/core';

import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo List';
  todos: Todo[];
  selectedTodo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.index().then(todos => this.todos = todos);
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
}
