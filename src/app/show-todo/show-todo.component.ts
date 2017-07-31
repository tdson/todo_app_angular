import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Router } from '@angular/router';

import {TodoService} from '../services/todo.service';
import {Todo} from '../models/todo';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {
  title = null;
  todo: Todo = null;
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.todoService.show(+params.get('id')))
      .subscribe(todo => {
        this.todo = todo;
        this.title = todo.title;
      });
  }

  back(): void {
    this.router.navigate(['/todos']);
  }

  save(): void {
    this.todoService.update(this.todo).then(() => this.back());
  }
}
