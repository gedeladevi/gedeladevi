import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
 GoToCreateAccount(): void {
    this.router.navigate(['/CreateAccount']);
  }
  GoToforgotpassword(): void {
    this.router.navigate(['/ForgotPassword']);
  }
  }


