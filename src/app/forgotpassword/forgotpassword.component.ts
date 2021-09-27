import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../model/admin';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private userservice:UserService) { }
  forgotpasswordForm:FormGroup=new FormGroup({
    emailid:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
  });
  result:any;
  
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
    /*this.userservice.emailVerification(this.forgotpasswordForm.controls.username.value).subscribe(
      data => {
        this.result=data;
        alert(this.result)
        if(this.result == true){
          localStorage.setItem("Username", this.forgotpasswordForm.controls.username.value);
          alert('Link Successfully Sent');
        }
      }
    )*/
  }

}
