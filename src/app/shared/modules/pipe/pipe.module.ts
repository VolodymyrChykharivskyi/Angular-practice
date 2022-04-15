import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPostsPipe } from './pipes';

@NgModule({
	declarations: [SearchPostsPipe],
	imports: [CommonModule],
	exports: [SearchPostsPipe],
})
export class PipeModule {}
