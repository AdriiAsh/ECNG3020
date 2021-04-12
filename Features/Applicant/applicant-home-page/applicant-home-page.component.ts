import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApplicationService} from '../../../Services/application.service';
import {MatDialog} from '@angular/material/dialog';
import {ViewStatusDialogComponent} from '../../../Dialogs/view-status-dialog/view-status-dialog.component';

@Component({
  selector: 'app-applicant-home-page',
  templateUrl: './applicant-home-page.component.html',
  styleUrls: ['./applicant-home-page.component.css']
})
export class ApplicantHomePageComponent implements OnInit {

  constructor(private ApplicationService:ApplicationService, private Router:Router, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(ViewStatusDialogComponent, { disableClose: true });
  }


  CheckStatus(){
    this.ApplicationService.GetApplicantApplication().subscribe(    
      response => {   
        if (response===null){
          console.log("Yes")
           this.openDialog()
        }
        else if(response !== null){
            console.log("View Status")
            this.Router.navigate(['Applicant/HomePage/Status'])   
        }
      },

      error => console.error('Error!', error)
    );
  }



}
