import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInModule } from './log-in/log-in.module';
const routes: Routes = [
  {
  path: '', redirectTo: '/Login', pathMatch: 'full'
  },
  {
    path: 'Login',
    loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), LogInModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
