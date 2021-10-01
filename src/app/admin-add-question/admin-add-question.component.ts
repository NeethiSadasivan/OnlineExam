import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Questions } from '../model/questions';
import { Subjects } from '../model/subjects';


@Component({
  selector: 'app-admin-add-question',
  templateUrl: './admin-add-question.component.html',
  styleUrls: ['./admin-add-question.component.css']
})
export class AdminAddQuestionComponent implements OnInit {
  
  // questions!: Questions;
  // subjects!: Subjects;
  
  quesForm : FormGroup=new FormGroup({
    question: new FormControl(""),
    option1:new FormControl(""),
    option2:new FormControl(""),
    option3:new FormControl(""),
    option4:new FormControl(""),
    level:new FormControl(""), 
    correctanswer:new FormControl(""),
    subjectid:new FormControl("")
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

  get subjectid()
  {
    return this.quesForm.get('subjectname');
  }
  constructor(private router:Router, public aiService:UserService) { }

  ques: any;

  ngOnInit() {
  }

  AddQues()
  {
    console.log(this.quesForm.value);
    this.aiService.AddQuestion(this.quesForm.value).subscribe(data=>{
      this.ques = data;
    })
  }
}
