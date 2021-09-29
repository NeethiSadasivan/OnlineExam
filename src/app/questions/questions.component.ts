import { Component, OnInit } from '@angular/core';
import { Questions } from '../model/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions!:Questions[];
  selectedOptions:any;
  recordedOptions!:any[];
  score!:number;  
  seconds:number=0;
  qProgress:number=0;
  correctAns!:number;
  hideSubmit:boolean = false;
  hideNext:boolean = false;
  hideBack:boolean = false;
  timer:number=0;

  

  

  constructor() { }
 

  ngOnInit(): void {
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
      if(this.seconds==20){
        this.startTest();
      }
      if(this.seconds==1800){
        this.submitTest();
      }
      },2000)
    
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
  }

}
