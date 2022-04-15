import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../../../shared/services/posts/posts.service';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../../shared/interfaces/post.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../shared/services/alert/alert.service';

@Component({
	selector: 'app-admin-post-edit',
	templateUrl: './admin-post-edit.component.html',
	styleUrls: ['./admin-post-edit.component.scss'],
})
export class AdminPostEditComponent implements OnInit, OnDestroy {
	public form: FormGroup;

	public post: Post;
	public submitted = false;

	private uSub: Subscription;

	constructor(
		private route: ActivatedRoute,
		private postsService: PostsService,
		private alertService: AlertService
	) {}

	public ngOnInit(): void {
		this.route.params
			.pipe(
				switchMap((params: Params) => {
					return this.postsService.getById(params.id);
				})
			)
			.subscribe((post: Post) => {
				this.post = post;
				this.form = new FormGroup({
					title: new FormControl(post.title, [Validators.required]),
					text: new FormControl(post.text, [Validators.required]),
				});
			});
	}

	public ngOnDestroy(): void {
		if (this.uSub) {
			this.uSub.unsubscribe();
		}
	}

	public onPostSubmit() {
		if (this.form.invalid) {
			return;
		}

		this.submitted = true;

		this.uSub = this.postsService
			.update({
				...this.post,
				text: this.form.value.text,
				title: this.form.value.title,
			})
			.subscribe(() => {
				this.submitted = false;
				this.alertService.success('Post was updated!')
			});
	}
}
