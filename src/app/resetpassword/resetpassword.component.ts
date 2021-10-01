import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  user!:User;
  emailid:any
  IsOTPValid:boolean = false;
  IsLoading:boolean = false;
  PasswordMatch:boolean = true;

  resetpasswordForm = new FormGroup({
    
    Password : new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    ConfirmPassword : new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    Otp:new FormControl("",[Validators.required]),
  });
  constructor(public userservice:UserService,public route:Router) { }

  ngOnInit(): void {
  }

  get Password()
  {
    return this.resetpasswordForm.get('Password');
  }

  
  get ConfirmPassword()
  {
    return this.resetpasswordForm.get('ConfirmPassword');
  }

  
  get Otp()
  {
    return this.resetpasswordForm.get('Otp');
  }

  Submitdata()
  {
    this.IsLoading = true;
    this.IsOTPValid = true;
    

    this.emailid = sessionStorage.getItem("ForgotEmail");
   

    if(this.resetpasswordForm.value["Password"] != this.resetpasswordForm.value["ConfirmPassword"]){
      this.PasswordMatch = false;
      this.IsLoading = false;
    }
    this.userservice.getUserByEmail(this.emailid).subscribe((data:any)=>
    {
      this.user=data;
      console.log(data);
    })

    this.userservice.ForgotPassword(this.resetpasswordForm.value).subscribe((data:any)=>
    {
      console.log(data);
      console.log(this.resetpasswordForm.value);
      if(data["IsOTPValid"] == true)
      {
        this.IsOTPValid = true;
        this.IsLoading = false;
        this.route.navigateByUrl("/UserLogin")
      }

      else if(data["IsOTPValid"] == false)
      {
        this.IsOTPValid = false;
        this.IsLoading = false;
      }
    }); 
  }



}
