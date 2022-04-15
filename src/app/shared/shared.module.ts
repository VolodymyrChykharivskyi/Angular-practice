import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { PipeModule } from './modules/pipe/pipe.module';
import { AlertComponent } from './components/alert/alert/alert.component';
import { CommonModule } from '@angular/common';
import { AlertService } from './services/alert/alert.service';

@NgModule({
	imports: [HttpClientModule, QuillModule.forRoot(), PipeModule, CommonModule],
	providers: [AlertService],
	exports: [HttpClientModule, QuillModule, PipeModule, CommonModule, AlertComponent],
	declarations: [AlertComponent],
})
export class SharedModule {}
