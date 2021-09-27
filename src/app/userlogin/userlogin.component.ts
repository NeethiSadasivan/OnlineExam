import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }
  status?:string;
  msg!:string;
  statusObj: any = {};

  ngOnInit(): void {
  }
  Loginform : FormGroup =new FormGroup({
    email: new FormControl("",[Validators.required,
      Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    password: new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
  });

  get email()
  {
    return this.Loginform.get('email');
  }
  get password()
  {
    return this.Loginform.get('password');
  }

  submitdata()
  {
     this.userservice.Login(this.Loginform.value).subscribe(  data =>{
      this.statusObj = data;
      console.log(this.statusObj);
      if(this.statusObj.status == "successful") {
        this.status = "Login Successfull";
        sessionStorage.setItem('user', this.Loginform.controls.email.value);
        this.userservice.subject.next(true);
        this.router.navigateByUrl("Home")
      }
      else {
        this.status = "Login Failed";
        this.msg ="Invalid Credentials";
      }
    });  
  }

}
