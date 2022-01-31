import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideAfterDirective } from './directives/hide-after.directive';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

@NgModule({
	declarations: [AppComponent, HideAfterDirective, PlaceholderComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
