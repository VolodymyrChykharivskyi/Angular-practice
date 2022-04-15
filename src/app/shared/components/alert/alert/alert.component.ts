import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Alert, AlertType } from '../../../interfaces/alert.interface';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../services/alert/alert.service';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
	@Input() delay = 5000;

	public text: string;
	public type: AlertType = 'success';

	private aSub: Subscription;

	constructor(private alertService: AlertService) {}

	public ngOnInit(): void {
		this.aSub = this.alertService.alert$.subscribe(({ text, type }: Alert) => {
			this.text = text;
			this.type = type;

			const timeout = setTimeout(() => {
				clearTimeout(timeout);
				this.text = '';
			}, this.delay);
		});
	}

	public ngOnDestroy(): void {
		if (this.aSub) {
			this.aSub.unsubscribe();
		}
	}
}
