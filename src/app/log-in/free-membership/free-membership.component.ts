import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-free-membership',
  templateUrl: './free-membership.component.html',
  styleUrls: ['./free-membership.component.css']
})
export class FreeMembershipComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  GoTOdashboard(): void{
    this.router.navigate(['/dashboard']);
  }

}
