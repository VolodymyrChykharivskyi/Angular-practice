import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoRestService } from './services/toto-rest/todo-rest.service';
import { AuthInterceptor } from './auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true };

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [TodoRestService, INTERCEPTOR_PROVIDER],
	bootstrap: [AppComponent],
})
export class AppModule {}
