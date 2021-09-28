import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Report } from '../model/report';

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css']
})
export class ReportcardComponent implements OnInit {

report:Array<any>=[]
email!:any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('user')
    console.log(this.email)
    this.userService.getReportByEmail(this.email).subscribe(data=>{
      this.report=data
      console.log(data)


    })
    
  }

}
