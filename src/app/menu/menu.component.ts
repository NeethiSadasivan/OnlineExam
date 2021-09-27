import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }
  message:boolean=false;
  ngOnInit(): void {
    this.userservice.recievedStatus().subscribe((data)=>{
      this.message=data;
      });
  }
  logout()
  {
    console.log("hi");
    sessionStorage.removeItem('username');
    sessionStorage.clear();
    this.userservice.subject.next(false);
    //this.message=false;
    this.router.navigate(['UserLogin']); 
  }

}
