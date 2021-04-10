import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
   GoTosubscription(): void {
   this.router.navigate(['/subscription']);
 }
 GoToFreeMembership(): void{
   this.router.navigate(['/free-membership']);
 }
 GoToFullMembership(): void{
   this.router.navigate(['/full-membership']);
 }
}

