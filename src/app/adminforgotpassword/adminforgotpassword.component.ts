import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminforgotpassword',
  templateUrl: './adminforgotpassword.component.html',
  styleUrls: ['./adminforgotpassword.component.css']
})
export class AdminforgotpasswordComponent implements OnInit {
  AdminfpForm:FormGroup=new FormGroup({
    emailid:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
  });
  admin!:Admin
  constructor() { }

  ngOnInit(): void {
    this.admin = new Admin()
  }
  get emailid()
  {
    return this.AdminfpForm.get('emailid');
  }
  get password()
  {
    return this.AdminfpForm.get('password');
  }

  Submitdata()
  {
    console.log(this.admin)
  }

}
