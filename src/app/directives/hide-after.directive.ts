import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class HideAfterClassContext {
	public $implicit = 0;
	public delay = 0;
}

@Directive({
	selector: '[appHideAfter]',
})
export class HideAfterDirective implements OnInit {
	@Input('appHideAfter') public set setDelay(value: number) {
		this.context.delay = this.context.$implicit = value ?? 0;
		this.delay = value * 1000;
	}
	@Input('appHideAfterThen') public template: TemplateRef<any> | null = null;

	private delay: number;
	private context = new HideAfterClassContext();

	constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

	public ngOnInit(): void {
		this.viewContainer.createEmbeddedView(this.templateRef, this.context);

		const interval = setInterval(() => {
			this.context.$implicit--;
		}, 1000);

		setTimeout(() => {
			this.viewContainer.clear();

			if (this.template) {
				this.viewContainer.createEmbeddedView(this.template, this.context);
			}

			clearInterval(interval);
		}, this.delay);
	}
}
