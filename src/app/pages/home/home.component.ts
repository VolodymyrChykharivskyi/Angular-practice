import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts/posts.service';
import { Observable } from 'rxjs';
import { Post } from '../../shared/interfaces/post.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public posts$: Observable<Post[]>;

	constructor(public postsService: PostsService) {}

	public ngOnInit(): void {
		this.posts$ = this.postsService.getAll();
	}
}
