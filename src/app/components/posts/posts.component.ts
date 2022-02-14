import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
	public showIds = false;

	constructor(public postsService: PostsService, private activatedRoute: ActivatedRoute, private router: Router) {}

	public ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe((params: Params) => {
			this.showIds = !!params.show_ids;
		});

		this.activatedRoute.fragment.subscribe((fragment: string) => {
			console.log(fragment);
		});
	}

	public onShowIdsClick() {
		this.router.navigate(['/posts'], { queryParams: { show_ids: true }, fragment: 'program-fragment' });
	}
}
