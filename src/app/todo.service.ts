import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoApiUrl = '/api/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoApiUrl);
  }

  getTodoById(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.todoApiUrl}/${todoId}`);
  }
}
