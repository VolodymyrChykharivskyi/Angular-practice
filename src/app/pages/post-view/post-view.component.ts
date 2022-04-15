import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../../shared/services/posts/posts.service';
import {Observable, of} from 'rxjs';
import { Post } from '../../shared/interfaces/post.interface';
import {switchMap} from "rxjs/operators";

@Component({
	selector: 'app-post-view',
	templateUrl: './post-view.component.html',
	styleUrls: ['./post-view.component.scss'],
})
export class PostViewComponent implements OnInit {
	public post$: Observable<Post>;

	constructor(private route: ActivatedRoute, private postService: PostsService) {}

	ngOnInit(): void {
		this.post$ = this.route.params.pipe(switchMap((params: Params) => this.postService.getById(params.id)));
	}
}
