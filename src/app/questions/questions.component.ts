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
  results!:number;
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
  level1marks!:number;
  testLevel!:number;
  timer:number=0;
  subjectname:any;
  emailid:any;
  isGivingTestFirstTime!:boolean;
  

  

  

  constructor(private route:Router,private userservice:UserService) { }
 

  ngOnInit(): void {
    this.isGivingTestFirstTime=true;
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
    this.userservice.getexamdata(this.subjectname).subscribe(
      (data:any)=>{
        
        this.exam=data;
        console.log(this.exam);
       
    });
    
    
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
    this.isGivingTestFirstTime=false;
    this.seconds=0;
    this.startTimer();
  }
  startTest2(){
  
    this.seconds=0;
    this.startTimer2();
  }
  startTest3(){
  
    this.seconds=0;
    this.startTimer3();
  }

  startTimer(){
    this.timer= window.setInterval(()=>{
      this.seconds++;
     /*  if(this.seconds==2 && this.isGivingTestFirstTime){
        this.startTest();
      }  */
      if(this.seconds==900){
        this.submitTest();
      }
      },1000)
    
  }
  startTimer2(){
    this.timer= window.setInterval(()=>{
      this.seconds++;
      /* if(this.seconds==20){
        this.startTest();
      } */
      if(this.seconds==900){
        this.submitTest();
      }
      },3000)
    
  }
  startTimer3(){
    this.timer= window.setInterval(()=>{
      this.seconds++;
      /* if(this.seconds==20){
        this.startTest();
      } */
      if(this.seconds==900){
        this.submitTest();
      }
      },2000)
    
  }
  nextTest()
  {
    if(this.testLevel==2){
      this.score=0;
      this.userservice.getAllLevel2Questions(this.subjectname).subscribe(
        data=>{
          //console.log(data);
          this.questions=data;
          this.hideTest=false;
          this.isPassed=false;
          this.startTest2();
      }
      );
    }
    if(this.testLevel==3){
      this.score=0;
      this.userservice.getAllLevel3Questions(this.subjectname).subscribe(
        data=>{
         // console.log(data);
          this.questions=data;
          console.log(this.questions.length)
          this.hideTest=false;
          this.isPassed=false;
          this.startTimer();
      }
      );
    }

  }

  displayTimeElapsed():string{
    return Math.floor(this.seconds/3600)+ ':' + (14-Math.floor(this.seconds/60))+ ':' + (60-Math.floor(this.seconds%60));
  }

  submitTest(){
    console.log("submit")
    for(let i=0 ;i <this.questions.length; i++){
     
      if(this.recordedOptions[i]==this.questions[i].correctanswer){
        this.score++;
        
      }      
    } 
    if(this.testLevel==1)
    {
      //console.log(sessionStorage.getItem('userid'))
      //this.results = { level1marks:this.score};
      this.score=this.score*10;
     
      this.userservice.updateResults(this.score,this.emailid,this.subjectname).subscribe(
        (data:any)=>{
          //console.log(data);
          this.results=data; 
          console.log(this.results) 
          console.log(this.exam.level1pass)
          if(this.results >= this.exam.level1pass)
              {
            
                console.log("passing condition")
                this.isPassed=true;
             }   
          
        }
      );       
       
    }
    if(this.testLevel==2)
    {
      //console.log(sessionStorage.getItem('userid'))
      //this.results = { level1marks:this.score};
      this.score=this.score*10;
     console.log(this.score)
      this.userservice.updateResults(this.score,this.emailid,this.subjectname).subscribe(
        (data:any)=>{
          //console.log(data);
          this.results=data; 
          console.log(this.results) 
          console.log(this.exam.level2pass)
          if(this.results >= this.exam.level2pass)
              {
            
                console.log("passing condition")
                this.isPassed=true;
             }   
          
        }
      );       
       
    }
    if(this.testLevel==3)
    {
      //console.log(sessionStorage.getItem('userid'))
      //this.results = { level1marks:this.score};
      this.score=this.score*10;
     
      this.userservice.updateResults(this.score,this.emailid,this.subjectname).subscribe(
        (data:any)=>{
          //console.log(data);
          this.results=data; 
          console.log(this.results) 
          console.log(this.exam.level3pass)
          if(this.results >= this.exam.level3pass)
              {
            
                console.log("passing condition")
                this.isPassed=true;
             }   
          
        }
      );       
       
    }

    this.testLevel++;
    this.hideTest=true;
    this.isSubmit=false;
    this.hideBack=false;
    this.hideSubmit=true;
    this.hideNext=false;
    this.selectedOptions=[false,false,false,false];
    
    this.correctAns=0;
    this.seconds=0;
    this.timer=0;
    this.qProgress=0;
    this.recordedOptions=[];
    if(this.testLevel==4){
      this.isLevel4=true
    }

  }

}
