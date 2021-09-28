import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Result } from '../model/result';

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css']
})
export class ReportcardComponent implements OnInit {

results!:Result[]
emailid?:string

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  
  }

}
