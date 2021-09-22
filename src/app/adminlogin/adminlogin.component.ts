import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admin!:Admin
  constructor() { }

  ngOnInit(): void {
    this.admin = new Admin()
  }
  Submitdata()
  {
    console.log(this.admin)
  }
}
