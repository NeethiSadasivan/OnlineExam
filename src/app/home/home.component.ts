import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user') == null) {
      this.router.navigateByUrl("Login");
    }
    else {
      this.user = sessionStorage.getItem('user');
      sessionStorage.setItem('user',this.user);
    }
  }

}
