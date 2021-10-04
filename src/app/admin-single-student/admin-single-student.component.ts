import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminInfoService } from '../admin-info.service';
import {FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ViewResult } from '../model/view-result';

@Component({
  selector: 'app-admin-single-student',
  templateUrl: './admin-single-student.component.html',
  styleUrls: ['./admin-single-student.component.css']
})
export class AdminSingleStudentComponent implements OnInit {

  isShown : boolean = false;
  resForm:FormGroup=new FormGroup({
    subjectid: new FormControl(""),
    state: new FormControl("")
  })

  result!:ViewResult[]

  get subjectid()
  {
    return this.resForm.get('subjectid');
  }
  get state()
  {
    return this.resForm.get('state')
  }

  constructor(public aiService: AdminInfoService, private router: ActivatedRoute) { }

  ngOnInit(): void {  }
    


  SearchStudent()
  {
    
    this.aiService.getStudentResultsByState(this.resForm.value.subjectid,this.resForm.value.state).subscribe((data)=>{
      this.isShown = true;
      this.result=data;
      console.log((data));
    })
  }
}

