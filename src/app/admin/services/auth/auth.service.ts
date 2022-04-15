import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../shared/interfaces/user.interface';
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { FbAuthResponse } from '../../../shared/interfaces/fb-auth-response.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
	public error$: Subject<string> = new Subject<string>();

	constructor(private http: HttpClient) {}

	get token(): string | null {
		const expDate = new Date(localStorage.getItem('fb-token-expires'));

		if (new Date() > expDate) {
			this.logout();

			return null;
		}

		return localStorage.getItem('fb-token');
	}

	public login(user: User): Observable<any> {
		return this.http
			.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
				user
			)
			.pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
	}

	public logout(): void {
		this.setToken(null);
	}

	public isAuthenticated(): boolean {
		return !!this.token;
	}

	private setToken(resp: FbAuthResponse | null): void {
		if (resp) {
			const expDate = new Date(new Date().getTime() + +resp.expiresIn * 1000);

			localStorage.setItem('fb-token', resp.idToken);
			localStorage.setItem('fb-token-expires', expDate.toString());
			return;
		}

		localStorage.clear();
	}

	private handleError(error: HttpErrorResponse) {
		const { message } = error.error.error;

		switch (message) {
			case 'EMAIL_NOT_FOUND':
				this.error$.next('Email not found');
				break;
			case 'INVALID_EMAIL':
				this.error$.next('Invalid email');
				break;
			case 'INVALID_PASSWORD':
				this.error$.next('Invalid password');
				break;
		}

		console.log(message);

		return throwError(error);
	}
}
