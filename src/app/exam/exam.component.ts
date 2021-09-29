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

  ngOnInit(): void {
    this.subjectname = sessionStorage.getItem('Subjectname');
  }
  Question()
  {
    sessionStorage.setItem('Subjectname', this.subjectname);
    this.router.navigateByUrl("Examwishes")

  }

}
