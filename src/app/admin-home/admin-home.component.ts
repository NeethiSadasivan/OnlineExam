import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  user!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user') == null) {
      this.router.navigateByUrl("AdminLogin");
    }
    else {
      this.user = sessionStorage.getItem('user');
         }
  }

}
