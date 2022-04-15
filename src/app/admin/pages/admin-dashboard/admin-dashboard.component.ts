import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../../shared/services/posts/posts.service';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { Subscription } from 'rxjs';
import {AlertService} from "../../../shared/services/alert/alert.service";

@Component({
	selector: 'app-admin-dashboard',
	templateUrl: './admin-dashboard.component.html',
	styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
	public posts: Post[] = [];
	public searchStr = '';

	private pSub: Subscription;
	private dSub: Subscription;

	constructor(private PostsService: PostsService, private alertService: AlertService) {}

	public ngOnInit(): void {
		this.pSub = this.PostsService.getAll().subscribe((posts) => {
			this.posts = posts;
		});
	}

	public ngOnDestroy(): void {
		if (this.pSub) {
			this.pSub.unsubscribe();
		}

		if (this.dSub) {
			this.dSub.unsubscribe();
		}
	}

	public onRemovePostClick(id: string) {
		this.dSub = this.PostsService.remove(id).subscribe(() => {
			this.posts = this.posts.filter(post => post.id !== id);

			this.alertService.danger('Post was deleted!')
		});
	}
}
