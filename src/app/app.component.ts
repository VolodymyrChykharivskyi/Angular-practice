import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Todo } from './interfaces/todo.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public todos: Todo[] = [];

	constructor(private http: HttpClient) {}

	public ngOnInit() {
		this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').subscribe(resp => {
			this.todos = resp;
		});
	}
}
