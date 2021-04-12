import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../Services/authentication.service'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MapService} from '../../../../Services/map.service'


import { EOCFirstDialogComponent } from 'src/app/Dialogs/eocfirst-dialog/eocfirst-dialog.component';
import {ApplicationService} from '../../../../Services/application.service'
@Component({
  selector: 'app-declined-application',
  templateUrl: './declined-application.component.html',
  styleUrls: ['./declined-application.component.css']
})
export class DeclinedApplicationComponent implements OnInit {
Results:any ;
id:string ; 

Application={
Status:'',
email:'',
} 

Application1={
  _id:'',
userId:'' , 

} 

Results2:any ; 
  constructor( private MapService:MapService, private route: ActivatedRoute, private ApplicationService:ApplicationService, public dialog:MatDialog,private AuthenticationService: AuthenticationService, private FormBuilder:FormBuilder, private Router:Router) { }

  DeclineForm = this.FormBuilder.group({
    Comments:new FormControl('',[Validators.required]),    
})


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.ApplicationService.GetoneApplication(this.id).subscribe(
          response => {this.Results=JSON.parse(JSON.stringify(response));
            this.Application1._id=this.Results._id,
            this.Application1.userId=this.Results._userId
          })
  })
}

  onSubmit(){
    console.log(this.Application.email)
  
  this.MapService.getLocation(this.Results._userId).subscribe(
    response => {
      this.Results2=response
      this.Application.email=this.Results2.email
      console.log(response)

      this.AuthenticationService.Decline_email(this.Application).subscribe(
        response => {this.Results=response;
          console.log(this.Application.Status)
          console.log(response)
        },
        error => console.error('Error!', error)
      )
  
  })
  
      this.ApplicationService.Declined(this.id,this.DeclineForm.value).subscribe(
        response => {this.Results=response;
          console.log(this.Application.Status)
          console.log(response)
        },
        error => console.error('Error!', error)
      )
    }



    
  }


