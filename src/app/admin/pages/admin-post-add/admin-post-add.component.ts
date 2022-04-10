import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Post} from "../../../shared/interfaces/post.interface";

@Component({
	selector: 'app-admin-post-add',
	templateUrl: './admin-post-add.component.html',
	styleUrls: ['./admin-post-add.component.scss'],
})
export class AdminPostAddComponent implements OnInit {
	public form: FormGroup;

	constructor() {}

	public ngOnInit(): void {
		this.form = new FormGroup({
			title: new FormControl(null, [Validators.required]),
			text: new FormControl(null, [Validators.required]),
			author: new FormControl(null, [Validators.required]),
		});
	}

	public onPostSubmit(): void {
		if (this.form.invalid) {
			return;
		}

		const post: Post = {
			title: this.form.value.title,
			text: this.form.value.text,
			author: this.form.value.author,
			date: new Date(),
		};
	}
}
