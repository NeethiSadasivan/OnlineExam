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
    question: new FormControl("",[Validators.required]),
    option1:new FormControl("",[Validators.required]),
    option2:new FormControl("",[Validators.required]),
    option3:new FormControl("",[Validators.required]),
    option4:new FormControl("",[Validators.required]),
    level:new FormControl("",[Validators.required,Validators.pattern("^[1-3]{1}$")]), 
    correctanswer:new FormControl("",[Validators.required,Validators.pattern("^[1-4]{1}$")]),
    subjectid:new FormControl("-Select Subject-",[Validators.required])
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
  msg!:string;
  AddQues()
  {
    console.log(this.quesForm.value);
    this.aiService.AddQuestion(this.quesForm.value).subscribe(data=>{
      this.ques = data;
      this.msg="Question Added Succesfully"
    })
  }
}
