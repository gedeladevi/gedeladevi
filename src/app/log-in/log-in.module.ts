import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { FreeMembershipComponent } from './free-membership/free-membership.component';
import { FullMembershipComponent } from './full-membership/full-membership.component';


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
    path: 'createaccount',
    component: CreateaccountComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'subscription',
    component: SubscriptionComponent
  },
  {
    path: 'free-membership',
    component: FreeMembershipComponent
  },
  {
    path: 'full-membership',
    component: FullMembershipComponent
  },


];

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    CreateaccountComponent,
    SubscriptionComponent,
    FreeMembershipComponent,
    FullMembershipComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LogInModule { }
