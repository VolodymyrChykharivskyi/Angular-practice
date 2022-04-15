import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
	selector: 'app-admin-login',
	templateUrl: './admin-login.component.html',
	styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
	public form: FormGroup;
	public isSubmitted = false;
	public message: string;

	constructor(public auth: AuthService, private router: Router, private route: ActivatedRoute) {}

	public ngOnInit(): void {
		this.route.queryParams.subscribe((params: Params) => {
			if (params?.loginAgain) {
				this.message = 'Please enter data!';
			} else if (params?.authFailed) {
				this.message = 'Session expired';
			}
		});

		this.form = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
		});
	}

	public onLoginSubmit(): void {
		if (this.form.invalid) {
			return;
		}

		this.isSubmitted = true;

		const user: User = {
			email: this.form.value.email,
			password: this.form.value.password,
			returnSecureToken: true,
		};

		this.auth.login(user).subscribe(
			() => {
				this.form.reset();
				this.router.navigate(['/admin', 'dashboard']);
				this.isSubmitted = false;
			},
			() => {
				this.isSubmitted = false;
			}
		);
	}
}
