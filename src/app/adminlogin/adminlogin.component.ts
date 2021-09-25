import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  AdminLoginForm:FormGroup=new FormGroup({
    emailid:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    password:new FormControl("",[Validators.required])
  });
  admin!:Admin
  constructor() { }

  ngOnInit(): void {
    this.admin = new Admin()
  }
  get emailid()
  {
    return this.AdminLoginForm.get('emailid');
  }
  get password()
  {
    return this.AdminLoginForm.get('password');
  }
  Submitdata()
  {
    console.log(this.admin)
  }
}
