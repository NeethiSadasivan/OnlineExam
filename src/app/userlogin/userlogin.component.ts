import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private router:Router) { }
  msg?:string;
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
    /* this.LoginService.Login(this.Loginform.value).subscribe(  data =>{
      this.statusObj = data;
      console.log(this.statusObj);
      if(this.statusObj.status == "successful") {
        this.msg = "Login Successfull";
        sessionStorage.setItem('user', this.Loginform.controls.email.value);
        this.router.navigateByUrl("Welcome")
      }
      else {
        this.msg = "Login Failed";
      }
    });  */ 
  }

}
