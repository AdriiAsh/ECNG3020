import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../../Services/application.service'
import {AuthenticationService} from '../../../Services/authentication.service'
import {MapService} from '../../../Services/map.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import {AcceptedDialogComponent} from '../../../Dialogs/accepted-dialog/accepted-dialog.component';

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-validate-application',
  templateUrl: './view-validate-application.component.html',
  styleUrls: ['./view-validate-application.component.css']
})
export class ViewValidateApplicationComponent implements OnInit {
Results1:any ; 
Results2:any ; 
pictures={
  metadata:'' 
}

id:string ;
Results:any ; 
Application={
  _id:'',
Firstname:'',    
Lastname:'',
Home_Address: '',
Gender:'',
DoB:'',
ContactNo1:'', //Array of numbers
ContactNo2:'',
Email:'',
email:'', 
Status:'',
userId:'' , 
} 
Availability:any ; 
Skill:any ;
  constructor(public dialog:MatDialog, private route: ActivatedRoute,private ApplicationService:ApplicationService,private AuthenticationService:AuthenticationService,private MapService:MapService) { }

  openDialog(){
    this.dialog.open(AcceptedDialogComponent, { disableClose: true });

  }


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.ApplicationService.GetoneApplication(this.id).subscribe(
          response => {this.Results=JSON.parse(JSON.stringify(response));
            this.Application._id=this.Results._id,
            this.Application.Firstname=this.Results.Firstname,
            this.Application.Lastname=this.Results.Lastname,
            this.Application.Home_Address=this.Results.Home_Address,
            this.Application.Gender=this.Results.Gender,
            this.Application.DoB=this.Results.DoB,
            this.Application.ContactNo1=this.Results.ContactNo1,
            this.Application.ContactNo2=this.Results.ContactNo2,
            this.Application.Email=this.Results.Email,
            this.Application.userId=this.Results._userId
            this.Availability=this.Results.Availability,
            this.Skill=this.Results.Skill
            console.log(response)
            console.log(this.Application.userId)
            this.ApplicationService.Picture(this.Application.userId).subscribe(
              response=>{console.log(response)
              this.Results1=response
              this.pictures.metadata=this.Results1.metadata;
              }
            )
          
          },
          error => console.error('Error!', error)
        )

        console.log(this.id)
  })

}

Accept(){
  /*
  console.log(this.Application.userId)
  this.MapService.getLocation(this.Application.userId).subscribe(
    response => {
      this.Results2=response
      this.Application.email=this.Results2.email
      console.log(response)

  console.log( this.Results2.email)
 this.AuthenticationService.email(this.Results2.email).subscribe(
  response => {this.Results=response;
    console.log(response)},
  error => console.error('Error!', error)
)
  })
  */
  this.ApplicationService.Accepted(this.id,this.Application.Status).subscribe(
    response => {this.Results=response;
      console.log(response)},
    error => console.error('Error!', error)
  )
  this.openDialog() ; 
  
}

}
