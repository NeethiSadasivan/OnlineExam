import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminInfoService } from '../admin-info.service';
import { Result } from '../result';
import { Users } from '../users';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-single-student',
  templateUrl: './admin-single-student.component.html',
  styleUrls: ['./admin-single-student.component.css']
})
export class AdminSingleStudentComponent implements OnInit {

  collect!:Collect;
  resForm:FormGroup=new FormGroup({
    subjectname:new FormControl(""),
    level:new FormControl("")
  })
  
  constructor(public aiService: AdminInfoService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    /* this.aiService.getUserById().subscribe((data)=>{
      this.users=data;
    }) */
  }
  SearchStudent()
  {
    
  }
}

class Collect{
  result!:Result;
  users!:Users;

  state!:string;
  city!:string;
  level!:number;
  subjectid!:number;

  constructor() {
    this.users.state=this.state;
    this.users.city=this.city;
    this.result.level=this.level;
    this.result.subjectid=this.subjectid;    
  }
}
