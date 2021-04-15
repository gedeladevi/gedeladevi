import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-full-membership',
  templateUrl: './full-membership.component.html',
  styleUrls: ['./full-membership.component.css']
})
export class FullMembershipComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  GoTodashboard(): void{
    this.router.navigate(['/dashboard']);
  }

}
