import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../interfaces/post.interface';
import { environment } from '../../../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { FbCreateResp } from '../../interfaces/fb-create-resp.interface';

@Injectable({
	providedIn: 'root',
})
export class PostsService {
	constructor(private http: HttpClient) {}

	public create(data: Post): Observable<Post> {
		return this.http.post(`${environment.fbDBUrl}/posts.json`, data).pipe(
			map((resp: FbCreateResp) => {
				return {
					...data,
					id: resp.name,
					date: new Date(data.date),
				};
			})
		);
	}

	public getAll(): Observable<Post[]> {
		return this.http.get(`${environment.fbDBUrl}/posts.json`).pipe(
			map((response: { key: string; value: any }) => {
				return Object.keys(response).map((key) => ({
					...response[key],
					id: key,
					date: new Date(response[key].date),
				}));
			})
		);
	}

	public remove(id: string): Observable<void> {
		return this.http.delete<void>(`${environment.fbDBUrl}/posts/${id}.json`);
	}

	public update(post: Post): Observable<Post> {
		return this.http.patch<Post>(`${environment.fbDBUrl}/posts/${post.id}.json`, post)
	}

	public getById(id: string): Observable<Post> {
		return this.http.get(`${environment.fbDBUrl}/posts/${id}.json`).pipe(
			map((post: Post) => {
				return {
					...post,
					id,
					date: new Date(post.date),
				};
			})
		);
	}
}
