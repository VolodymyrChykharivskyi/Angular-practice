import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
	constructor(private http: HttpClient) {}

	get token(): string {
		return '';
	}

	public login(user: User): Observable<any> {
		return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]`, user);
	}

	public logout(): void {}

	public isAuthenticated(): boolean {
		return !!this.token;
	}

	private setToken(): void {}
}
