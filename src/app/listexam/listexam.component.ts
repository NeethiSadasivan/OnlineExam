import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subjects } from '../model/subjects';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listexam',
  templateUrl: './listexam.component.html',
  styleUrls: ['./listexam.component.css']
})
export class ListexamComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) { }
  subjects:Array<any>=[]
  emailid:any;
  ngOnInit(): void {
   
  this.userservice.getsubjects().subscribe(
    data=>{
      this.subjects=data;      
    }
  )
  this.emailid = sessionStorage.getItem('user')
  }

  examsubject(subjectname:any){
    sessionStorage.setItem('Subjectname', subjectname);
    sessionStorage.setItem('user',this.emailid);
    this.router.navigateByUrl("Exam")
  }
  


}
