import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
	public post: Post;

	constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router) {}

	public ngOnInit(): void {
		// this.post = this.route.snapshot.data.post;

		this.route.data.subscribe((data) => {
			this.post = data.post;
		});
	}

	public onLoadPostClick() {
		this.router.navigate(['/posts', 44]);
	}
}
