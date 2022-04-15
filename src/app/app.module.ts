import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ukLocale from '@angular/common/locales/uk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './shared/components/post/post.component';
import { PostViewComponent } from './pages/post-view/post-view.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors';

registerLocaleData(ukLocale, 'uk');

const INTERCEPTOR_PROVIDER: Provider = { provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor };

@NgModule({
	declarations: [AppComponent, MainLayoutComponent, HomeComponent, PostComponent, PostViewComponent],
	imports: [BrowserModule, AppRoutingModule, SharedModule],
	providers: [INTERCEPTOR_PROVIDER],
	bootstrap: [AppComponent],
})
export class AppModule {}
