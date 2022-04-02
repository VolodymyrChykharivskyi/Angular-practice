import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
	public showIds = false;

	constructor(public postsService: PostsService, private route: ActivatedRoute, private router: Router) {}

	public ngOnInit() {
		this.route.queryParams.subscribe((data: Params) => {
			this.showIds = !!data.showIds;
		});

		this.route.fragment.subscribe((fragment) => {
			console.log(fragment);
		});
	}

	public onShowIdsClick(): void {
		this.router.navigate(['/posts'], { queryParams: { showIds: true }, fragment: 'program-fragment' });
	}
}
