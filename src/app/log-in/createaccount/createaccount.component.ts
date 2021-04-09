import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  GoTologin(): void {
    this.router.navigate(['/login']);
  }
  GoToForgotPassword(): void {
    this.router.navigate(['/ForgotPassword']);
  }
}



