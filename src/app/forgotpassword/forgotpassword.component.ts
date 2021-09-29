import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private userservice:UserService,private route:Router) { }
  forgotpasswordForm:FormGroup=new FormGroup({
    emailid:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")])
  });

  UserDoesNotExist =false;
  Isloading:boolean = false;

  
  
  ngOnInit(): void {
  }
  get emailid()
  {
    return this.forgotpasswordForm.get('emailid');
  }
 
  Submitdata()
  {
   this.Isloading = true;
   this.userservice.CheckEmail(this.forgotpasswordForm.value).subscribe((data:any)=>
   {
    if(data["EmailExists"] == true)
    {
        this.UserDoesNotExist = false;
        this.route.navigateByUrl("/ForgotPassword");
        sessionStorage.setItem("ForgotEmail",this.forgotpasswordForm.value["emailid"]);
    }   
   
   else if(data["EmailExists"]== false)
   {
      this.UserDoesNotExist=true;
   }
   
  })   
  }

}
