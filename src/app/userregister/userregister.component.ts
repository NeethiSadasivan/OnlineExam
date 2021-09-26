import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private route:Router) { }
  Registerform:FormGroup=new FormGroup({
    FullName:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    Password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    Email:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    Mobile:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    City:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    State:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    Qualification:new FormControl("",[Validators.required]),
    YearOfCompletion:new FormControl("",[Validators.required])
  });
  statusObj: any = {};
  msg!:string;
  user!:User
  get FullName()
  {
    return this.Registerform.get('FullName');
  }
  get Password()
  {
    return this.Registerform.get('Password');
  }
  get Email()
  {
    return this.Registerform.get('Email');
  }
  get Mobile()
  {
    return this.Registerform.get('Mobile');
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
    /*console.log(this.Registerform.value);
    this.service.Add(this.Registerform.value).subscribe(data => {
      this.statusObj = data;
      //let jdata = JSON.parse(data.toString());
      console.log(this.statusObj);
      if(this.statusObj.status == "registered") {
        this.route.navigateByUrl("Login");
      }
      else {
        this.msg = "User Already Exist";
      }
    });*/
  }

}
