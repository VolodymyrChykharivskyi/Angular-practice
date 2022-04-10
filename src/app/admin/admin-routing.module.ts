import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';

import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminPostAddComponent } from './pages/admin-post-add/admin-post-add.component';
import { AdminPostEditComponent } from './pages/admin-post-edit/admin-post-edit.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards';

const routes: Routes = [
	{
		path: '',
		component: AdminLayoutComponent,
		children: [
			{ path: '', redirectTo: '/admin/login', pathMatch: 'full' },
			{ path: 'login', component: AdminLoginComponent },
			{ path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
			{ path: 'create', component: AdminPostAddComponent, canActivate: [AuthGuard] },
			{ path: 'post/:id/edit', component: AdminPostEditComponent, canActivate: [AuthGuard] },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {}
