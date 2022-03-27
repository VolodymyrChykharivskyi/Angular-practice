import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class FormValidator {
	static restrictedEmails(control: FormControl): { [key: string]: boolean } {
		if (['test@gmail.com', 'v@gmail.com'].includes(control.value)) {
			return { restrictedEmail: true };
		}

		return null;
	}

	static uniqEmail(
		control: FormControl
	): Promise<{ [key: string]: boolean }> | Observable<{ [key: string]: boolean }> {
		return new Promise(resolve => {
			setTimeout(() => {
				if (control.value === 'async@gmail.com') {
					resolve({ uniqEmail: true });
				}

				return null;
			}, 1000)
		});
	}
}
