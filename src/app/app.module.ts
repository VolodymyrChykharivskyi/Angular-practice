import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './shared/components/post/post.component';
import { PostViewComponent } from './pages/post-view/post-view.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent, MainLayoutComponent, HomeComponent, PostComponent, PostViewComponent],
	imports: [BrowserModule, AppRoutingModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
