import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  api: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient ,
  ) { }

  getAllTodos(): Observable<any> {
    return this.http.get(this.api)
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

}
