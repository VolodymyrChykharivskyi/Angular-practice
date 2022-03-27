import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidator } from './form.validator';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public appState = 'on';

	public form: FormGroup;

	public ngOnInit(): void {
		this.form = new FormGroup({
			email: new FormControl(
				'',
				[Validators.email, Validators.required, FormValidator.restrictedEmails],
				[FormValidator.uniqEmail]
			),
			password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
			address: new FormGroup({
				country: new FormControl('ua'),
				city: new FormControl('', [Validators.required]),
			}),
			skills: new FormArray([]),
		});
	}

	public onClickSetCapital(): void {
		const cityMap = {
			en: 'London',
			ua: 'Kyiv',
			it: 'Rome',
		};

		const city = cityMap[this.form.get('address').get('country').value];

		/** Dynamic update form value */
		this.form.patchValue({ address: { city } });
	}

	public onSubmitClick(): void {
		const formData = this.form.value;

		console.log('Form submitted: ', formData);

		formData.reset();
	}

	public onAddskill(): void {
		const control = new FormControl('', [Validators.required]);

		(this.form.get('skills') as FormArray).push(control);
	}
}
