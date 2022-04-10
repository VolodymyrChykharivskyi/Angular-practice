import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminPostAddComponent } from './pages/admin-post-add/admin-post-add.component';
import { AdminPostEditComponent } from './pages/admin-post-edit/admin-post-edit.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AuthService } from './services/auth.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		AdminLayoutComponent,
		AdminLoginComponent,
		AdminDashboardComponent,
		AdminPostAddComponent,
		AdminPostEditComponent,
	],
	imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule, SharedModule],
	exports: [],
	providers: [AuthService],
})
export class AdminModule {}
