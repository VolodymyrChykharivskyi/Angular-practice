import { Component, OnInit } from '@angular/core';

import { Todo } from './interfaces/todo.interface';

import { TodoRestService } from './services/toto-rest/todo-rest.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public todos: Todo[] = [];

	public isLoading = false;

	public todoTitle = '';

	public error = '';

	constructor(private todoRestService: TodoRestService) {}

	public ngOnInit() {
		this.onFetchTotos();
	}

	public onAddTodo(): void {
		if (!this.todoTitle.trim()) {
			return;
		}

		const newTodo: Todo = {
			title: this.todoTitle,
			completed: false,
		};

		this.todoRestService.addItem(newTodo).subscribe((resp) => {
			this.todos.push(resp);
			this.todoTitle = '';
		});
	}

	public onFetchTotos(): void {
		this.isLoading = true;

		this.todoRestService.getItems().subscribe((resp) => {
			this.todos = resp;

			this.isLoading = false;
		}, error => {
			this.error = error.message;
			console.log(error);
		});
	}

	public onRemoveTodo(id: number): void {
		this.todoRestService.removeItem(id).subscribe(() => {
			this.todos = this.todos.filter((todo) => todo.id !== id);
		});
	}

	public onCompleteTodo(id: number): void {
		this.todoRestService.completeTodo(id).subscribe((resp) => {
			this.todos.find((todo) => todo.id === id).completed = true;
		});
	}
}
