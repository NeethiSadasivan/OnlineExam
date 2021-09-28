import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminInfoService } from '../admin-info.service';
import { Questions } from '../model/questions';
import { Subjects } from '../model/subjects';


@Component({
  selector: 'app-admin-add-question',
  templateUrl: './admin-add-question.component.html',
  styleUrls: ['./admin-add-question.component.css']
})
export class AdminAddQuestionComponent implements OnInit {
  
  questions!: Questions;
  subjects!: Subjects;
  
  quesForm : FormGroup=new FormGroup({
    question: new FormControl(""),
    option1:new FormControl(""),
    option2:new FormControl(""),
    option3:new FormControl(""),
    option4:new FormControl(""),
    level:new FormControl(""), 
    correctanswer:new FormControl(""),
    subjectname:new FormControl("")
  });

  get question()
  {
    return this.quesForm.get('question');
  }

  get option1()
  {
    return this.quesForm.get('option1');
  }

  get option2()
  {
    return this.quesForm.get('option2');
  }

  get option3()
  {
    return this.quesForm.get('option3');
  }

  get option4()
  {
    return this.quesForm.get('option4');
  }

  get level()
  {
    return this.quesForm.get('level');
  }

  get correctanswer()
  {
    return this.quesForm.get('correctanswer')
  }

  get subjectname()
  {
    return this.quesForm.get('subjectname');
  }
  constructor(private router:Router, public aiService:AdminInfoService) { }

  statusObj: any;
  msg!:string;

  ngOnInit() {
  }

  AddQues()
  {
    this.aiService.AddQues(this.quesForm.value).subscribe(data => {
      this.statusObj = data;

      console.log(this.statusObj);

      if(this.statusObj.status=="added"){
        this.router.navigateByUrl("AddQuestion");
      }
      else{
        this.msg="Question Exits";
      }
    })
  }
}
