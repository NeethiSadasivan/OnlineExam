import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Result } from '../model/result';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-admin-student-info',
  templateUrl: './admin-student-info.component.html',
  styleUrls: ['./admin-student-info.component.css']
})
export class AdminStudentInfoComponent implements OnInit {

  user:User[]=[];
  result:Result[]=[];
  users2!:User;
  result2!:Result;

  constructor(public aiService: UserService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.aiService.getAllUsers().subscribe((data:User[])=>{
      this.user=data;
    })
    this.aiService.getAllResult().subscribe((data:Result[])=>{
      this.result=data;
    })
    
  }

  searchData()
  {
    
  }
}
