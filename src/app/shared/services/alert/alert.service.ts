import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../../interfaces/alert.interface';

@Injectable()
export class AlertService {
	public alert$ = new Subject<Alert>();

	public success(text: string): void {
		this.alert$.next({ type: 'success', text });
	}

	public warning(text: string) {
		this.alert$.next({ type: 'warning', text });
	}

	public danger(text: string) {
		this.alert$.next({ type: 'danger', text });
	}
}
