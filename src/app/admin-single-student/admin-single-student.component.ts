import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminInfoService } from '../admin-info.service';
import { Result } from '../result';
import { Users } from '../users';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-admin-single-student',
  templateUrl: './admin-single-student.component.html',
  styleUrls: ['./admin-single-student.component.css']
})
export class AdminSingleStudentComponent implements OnInit {

  resForm:FormGroup=new FormGroup({
    subjectname: new FormControl(""),
    level: new FormControl("")
  })

  get subjectname()
  {
    return this.resForm.get('subjectname');
  }
  
  get level()
  {
    return this.resForm.get('level')
  }

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

