import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Result } from '../result';
import { AdminInfoService } from '../admin-info.service';
import { ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-admin-student-info',
  templateUrl: './admin-student-info.component.html',
  styleUrls: ['./admin-student-info.component.css']
})
export class AdminStudentInfoComponent implements OnInit {

  users:Users[]=[];
  result:Result[]=[];
  users2!:Users;
  result2!:Result;

  constructor(public aiService: AdminInfoService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.aiService.getAllUsers().subscribe((data:Users[])=>{
      this.users=data;
    })
    this.aiService.getAllResult().subscribe((data:Result[])=>{
      this.result=data;
    })
    
  }

  searchData()
  {
    
  }
}
