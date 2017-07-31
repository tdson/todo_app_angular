import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import {Todo} from '../models/todo';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  private host = 'http://www.localhost:3000';
  private apiVersion = 'v1';
  private todoAPI = `${this.host}/api/${this.apiVersion}/todos`;
  private headers =  new Headers({
    'Content-Type': 'application/json',
    // 'Authorization': 'bearer 780448158c71fd246172fddf577d7ae99707edcaf4d949ec3e1f73bdbaa86e6f'
    'Authorization': 'bearer 7ce021b9a6e1dec6067761971c145fbeb76fcd568f1004eab2962eecb9834a38'
  });

  constructor(private http: Http) {}

  index(): Promise<Todo[]> {
    return this.http.get(this.todoAPI, {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Todo[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    alert(error.message || error);
    return Promise.reject(error.message || error);
  }
}
