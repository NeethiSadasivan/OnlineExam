import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
@Component({
  selector: 'app-adminforgotpassword',
  templateUrl: './adminforgotpassword.component.html',
  styleUrls: ['./adminforgotpassword.component.css']
})
export class AdminforgotpasswordComponent implements OnInit {
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
