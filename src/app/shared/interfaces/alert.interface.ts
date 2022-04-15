export interface Alert {
	text: string;
	type: AlertType;
}

export type AlertType = 'success' | 'warning' | 'danger';
