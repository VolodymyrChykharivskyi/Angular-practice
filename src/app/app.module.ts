import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AboutExtraComponent } from './components/about-extra/about-extra.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent, AboutComponent, HomeComponent, PostsComponent, PostComponent, AboutExtraComponent],
	imports: [BrowserModule, FormsModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
