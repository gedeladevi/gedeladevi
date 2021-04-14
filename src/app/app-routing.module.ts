import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { LogInModule } from './log-in/log-in.module';
const routes: Routes = [
  {
  path: '', redirectTo: '/Login', pathMatch: 'full'
  },
  {
    path: 'Login',
    loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), LogInModule, DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
