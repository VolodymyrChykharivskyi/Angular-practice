import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-admin-login',
	templateUrl: './admin-login.component.html',
	styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
	public form: FormGroup;

	constructor(private auth: AuthService, private router: Router) {}

	public ngOnInit(): void {
		this.form = new FormGroup({
			email: new FormControl(null, [Validators.required, Validators.email]),
			password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
		});
	}

	public onLoginSubmit(): void {
		if (this.form.invalid) {
			return;
		}

		const user: User = {
			email: this.form.value.email,
			password: this.form.value.password,
		};

		this.auth.login(user).subscribe(() => {
			this.form.reset();
			this.router.navigate(['/admin', 'dashboard']);
		});
		console.log(this.form.value);
	}
}
