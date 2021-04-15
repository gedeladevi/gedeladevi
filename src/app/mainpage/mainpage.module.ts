import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { LoginComponent } from '../log-in/login/login.component';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
 {
   path: 'mainpage',
   component: MainpageComponent
 }
];
@NgModule({
  declarations: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class MainpageModule { }
