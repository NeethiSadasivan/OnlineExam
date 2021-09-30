import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private router:Router,private userservice:UserService) { }
  subjectname:any;
  emailid:any;

  ngOnInit(): void {
    this.subjectname = sessionStorage.getItem('Subjectname');
    this.emailid = sessionStorage.getItem('user');
  }
  Question()
  {
    sessionStorage.setItem('Subjectname', this.subjectname);
    sessionStorage.setItem('user',this.emailid);
    this.router.navigateByUrl("Examwishes")

  }

}
