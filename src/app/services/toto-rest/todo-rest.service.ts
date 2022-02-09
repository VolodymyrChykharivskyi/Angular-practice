import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Todo } from '../../interfaces/todo.interface';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

@Injectable()
export class TodoRestService {
	constructor(private http: HttpClient) {}

	public addItem(todo: Todo): Observable<Todo> {
		return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
			headers: new HttpHeaders({
				MyCustomHeader: Math.random().toString(),
			}),
		});
	}

	public getItems(): Observable<Todo[]> {
		return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', { params: new HttpParams().set('_limit', '3') }).pipe(
			delay(500),
			catchError((error) => {
				console.log('Error', error.message);
				return throwError(error);
			})
		);
	}

	public removeItem(id: number): Observable<void> {
		return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
	}

	public completeTodo(id: number): Observable<Todo> {
		return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, { completed: true });
	}
}
