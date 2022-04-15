import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../../../../interfaces/post.interface';

@Pipe({
	name: 'searchPosts',
})
export class SearchPostsPipe implements PipeTransform {
	public transform(posts: Post[], searchValue = ''): Post[] {
		console.log('here');
		if (!searchValue.trim()) {
			return posts;
		}

		return posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()));
	}
}
