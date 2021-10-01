import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
  
  status!: string;
  statusObj: any = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
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
    console.log(this.AdminLoginForm.value);
    this.userService.AdminLogin(this.AdminLoginForm.value).subscribe(data => {
      this.statusObj = data;
      console.log(this.statusObj);
      if(this.statusObj.status == "successful") {
        sessionStorage.setItem('user', this.AdminLoginForm.controls.emailid.value);
        this.userService.subject.next(true);
        this.status = "Login Successfull";
        this.router.navigateByUrl("AdminHome")
      }
      else {
        this.status = "Login Failed";
      }
    });
  }
}
