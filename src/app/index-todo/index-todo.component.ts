import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-index-todo',
  templateUrl: './index-todo.component.html',
  styleUrls: ['./index-todo.component.css']
})
export class IndexTodoComponent implements OnInit {
  title = 'Todo List';
  todos: Todo[];
  selectedTodo: Todo;

  constructor(
    private todoService: TodoService,
    private router: Router) {}

  ngOnInit(): void {
    this.todoService.index().then(todos => this.todos = todos);
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  show(todo: Todo): void {
    this.router.navigate(['/todos', todo.id]);
  }
}
