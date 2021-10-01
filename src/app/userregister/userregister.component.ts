import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }
  Registerform:FormGroup=new FormGroup({
    Username:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    Password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    ConfirmPassword:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    Email:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    Mobile:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    Date:new FormControl("",[Validators.required]),
    City:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    State:new FormControl("Andhra Pradesh"),
    Qualification:new FormControl("B.Tech Computer Science Engineering"),
    YearOfCompletion:new FormControl("2021")
  });
  statusObj: any = {};
  status!:string;
  user!:User;
  msg:any;

  get Username()
  {
    return this.Registerform.get('Username');
  }
  get Password()
  {
    return this.Registerform.get('Password');
  }
  get ConfirmPassword()
  {
    return this.Registerform.get('ConfirmPassword');
  }
  get Email()
  {
    return this.Registerform.get('Email');
  }
  get Mobile()
  {
    return this.Registerform.get('Mobile');
  }
  get Date()
  {
    return this.Registerform.get('Date');
  }
  get City()
  {
    return this.Registerform.get('City');
  }
  get State()
  {
    return this.Registerform.get('State');
  }
  get Qualification()
  {
    return this.Registerform.get('Qualification');
  }
  get YearOfCompletion()
  {
    return this.Registerform.get('YearOfCompletion');
  }
 
  ngOnInit(): void {
  }
  Submitregister()
  {
    console.log(this.Registerform.value);
    this.userservice.Register(this.Registerform.value).subscribe(data => {
      this.statusObj = data;
      if (this.Registerform.controls.Password.value == this.Registerform.controls.ConfirmPassword.value) {
        console.log(this.statusObj);
        if(this.statusObj.status == "registered") {
          this.status = "Registration Successfull";
          this.router.navigateByUrl("UserLogin")
        }
        else {
          this.status = "User Already Exist";
          this.msg = "User Already Exist"
        }
      }
     
    });
  }

}
