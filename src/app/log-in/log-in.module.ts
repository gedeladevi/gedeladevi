import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'CreateAccount',
    component: CreateaccountComponent
  },
  {
    path: 'ForgotPassword',
    component: ForgotPasswordComponent
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    CreateaccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LogInModule { }
