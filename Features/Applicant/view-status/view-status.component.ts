import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../../Services/application.service'

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {
Applicant={
  _id:"",
  Status:"",
  Date_created:"",
  Comments:""
}

  constructor(private ApplicationService:ApplicationService) { }
  ngOnInit(): void {
    this.ApplicationService.GetApplicantApplication().subscribe(
      response => {
      this.Applicant=JSON.parse(JSON.stringify(response))   
      },
      error => console.error('Error!', error)
    );
  }

}
