import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/admin/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private auth: AuthService, private router: Router) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (this.auth.isAuthenticated()) {
			request = request.clone({
				setParams: {
					auth: this.auth.token,
				},
			});
		}
		return next.handle(request).pipe(
			tap(() => console.log('Intercept')),
			catchError((error: HttpErrorResponse) => {
				console.error('Interceptor error');
				if (error.status === 401) {
					this.auth.logout();
					this.router.navigate(['/admin', 'login'], { queryParams: { authFailed: true } });
				}

				return throwError(error);
			})
		);
	}
}
