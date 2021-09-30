import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../model/exam';
import { Questions } from '../model/questions';
import { Result } from '../model/result';
import { UserService } from '../user.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions!:Questions[];
  results!:Result;
  selectedOptions!:any[];
  recordedOptions:any[]=[0];
  score!:number;  
  seconds!:number;
  qProgress!:number;
  correctAns!:number;
  hideSubmit!:boolean;
  hideNext!:boolean;
  hideBack!:boolean;
  isSubmit!:boolean;
  isLevel4!:boolean;
  hideTest!:boolean;
  exam!:Exam;
  isPassed!:boolean;

  testLevel!:number;
  timer:number=0;
  subjectname:any;
  emailid:any;

  

  

  constructor(private route:Router,private userservice:UserService) { }
 

  ngOnInit(): void {
    this.testLevel=1;
    this.hideTest=false;
    this.isSubmit=false;
    this.hideBack=false;
    this.hideSubmit=true;
    this.hideNext=false;
    this.selectedOptions=[false,false,false,false];
    this.score=0;
    this.correctAns=0;
    this.seconds=0;
    this.timer=0;
    this.qProgress=0;
    this.isLevel4=false;
    this.subjectname = sessionStorage.getItem('Subjectname');
    this.emailid = sessionStorage.getItem('user');
    this.userservice.getAllLevel1Questions(this.subjectname).subscribe(
      data=>{
        console.log(data);
        this.questions=data;
        this.startTimer();
    }
    );
    
    //this.subjectname = sessionStorage.getItem('Subjectname');

  }
  

  indexSelect(i:number){
    this.qProgress=i;
    if(this.qProgress==this.questions.length-1){
      this.hideNext=true;
      this.hideSubmit=false;

    }else{
      this.hideNext=false;
      this.hideSubmit=true;
    }

    for(let i=0; i<4;i++){
      if(i==(this.recordedOptions[this.qProgress]-1))
      this.selectedOptions[i]=true;
      else
      this.selectedOptions[i]=false;
    }
  }

  answer(id:number){
    this.recordedOptions[this.qProgress]=id+1;
    for(let i=0; i<4;i++){
      if(i==id)
      this.selectedOptions[i]=true;
      else
      this.selectedOptions[i]=false;
    }
  }

  nav(value:boolean){
    if(value && this.qProgress<this.questions.length){
      this.qProgress++
      if(this.qProgress==this.questions.length-1){
        this.hideNext=true;
        this.hideSubmit=false
      }
    }else if(!value && this.qProgress!=0 )
    {
        this.qProgress--;
        this.hideSubmit=true;
        this.hideNext=false;
    }
    for(let i=0; i<4;i++){
      if(i==(this.recordedOptions[this.qProgress]-1))
      this.selectedOptions[i]=true;
      else
      this.selectedOptions[i]=false;
    }
   
  }
  startTest(){
  
    this.seconds=0;
    this.startTimer();
  }

  startTimer(){
    this.timer= window.setInterval(()=>{
      this.seconds++;
      /* if(this.seconds==20){
        this.startTest();
      } */
      if(this.seconds==1800){
        this.submitTest();
      }
      },1000)
    
  }
  nextTest()
  {

  }

  displayTimeElapsed():string{
    return Math.floor(this.seconds/3600)+ ':' + (29-Math.floor(this.seconds/60))+ ':' + (60-Math.floor(this.seconds%60));
  }

  submitTest(){
    for(let i=0 ;i <this.questions.length; i++){
      if(this.recordedOptions[i]==this.questions[i].correctanswer){
        this.score++;
      }
      
    }
    
    if(this.testLevel==1)
    {
      this.score=this.score*5;
      console.log(this.score)
      this.userservice.updateResults(this.results,this.emailid,this.subjectname).subscribe(
        (data:any)=>{
          this.results = data;
          
        }
      );
      console.log(this.results)
      /* console.log("inside level 1")
      if(this.results.level1marks >= this.exam.level1pass)
      {
        
        console.log("passing condition")
        this.isPassed=true;
      } */
    }
  }

}
