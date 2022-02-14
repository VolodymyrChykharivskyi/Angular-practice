import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post.interface';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
	public post: Post;

	constructor(private activatedRoute: ActivatedRoute, private postService: PostsService, private router: Router) {}

	public ngOnInit(): void {
		this.activatedRoute.params.subscribe((params: Params) => {
			this.post = this.postService.getById(+params.id);
		});
	}

	public onLoadPostClick(): void {
		this.router.navigate(['/posts', 44]);
	}
}
