import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminPostAddComponent } from './pages/admin-post-add/admin-post-add.component';
import { AdminPostEditComponent } from './pages/admin-post-edit/admin-post-edit.component';
import { AdminRoutingModule } from './admin-routing.module';

import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './guards';

@NgModule({
	declarations: [
		AdminLayoutComponent,
		AdminLoginComponent,
		AdminDashboardComponent,
		AdminPostAddComponent,
		AdminPostEditComponent,
	],
	imports: [AdminRoutingModule, FormsModule, ReactiveFormsModule, SharedModule],
	exports: [],
	providers: [AuthGuard],
})
export class AdminModule {}
