import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Route[] = [
	{ path: '', component: HomePageComponent, pathMatch: 'full' },
	// { path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule' },
	{
		path: 'about',
		loadChildren: () => import('./about-page/about-page.module').then((module) => module.AboutPageModule),
	},
];
@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
