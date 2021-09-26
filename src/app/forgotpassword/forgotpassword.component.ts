import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }
  forgotpasswordForm:FormGroup=new FormGroup({
    emailid:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
  });
  admin!:Admin
  ngOnInit(): void {
  }
  get emailid()
  {
    return this.forgotpasswordForm.get('emailid');
  }
  get password()
  {
    return this.forgotpasswordForm.get('password');
  }

  Submitdata()
  {
    console.log(this.admin)
  }

}
