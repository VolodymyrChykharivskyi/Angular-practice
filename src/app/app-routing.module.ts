import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { AboutExtraComponent } from './components/about-extra/about-extra.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent, children: [{ path: 'extra', component: AboutExtraComponent }] },
	{ path: 'posts', component: PostsComponent },
	{ path: 'posts/:id', component: PostComponent },
	{ path: 'error', component: ErrorPageComponent },
	{ path: '**', redirectTo: '/error' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
