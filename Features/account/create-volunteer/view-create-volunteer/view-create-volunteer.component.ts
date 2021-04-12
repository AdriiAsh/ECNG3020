import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../Services/authentication.service';
import {VolunteerService} from '../../../../Services/volunteer.service';
import {ApplicationService} from '../../../../Services/application.service';
import {MapService} from '../../../../Services/map.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AccountCreatedDialogComponent } from 'src/app/Dialogs/account-created-dialog/account-created-dialog.component';


@Component({
  selector: 'app-view-create-volunteer',
  templateUrl: './view-create-volunteer.component.html',
  styleUrls: ['./view-create-volunteer.component.css']
})
export class ViewCreateVolunteerComponent implements OnInit {


  constructor(private dialog:MatDialog, private FormBuilder:FormBuilder, private route: ActivatedRoute,private AuthenticationService:AuthenticationService,private ApplicationService:ApplicationService, private VolunteerService:VolunteerService,private MapService:MapService) { }
  
  openDialog(){
    this.dialog.open(AccountCreatedDialogComponent, { disableClose: true });
  }



  SignupForm = this.FormBuilder.group({
    Email:[''],    
    Role:['Volunteer']
});
  Body1:''; 
  User={
    id:'',
    Role:'',
    Email:'',
    First:true,
  }

  Application={
    Status:''
  }

userid:string;
id:string;
Results:any ; 

Userid:string ; 

Volunteers:any;
Results2:any;

Results3={
  _id:'' 
}


Body:any;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      console.log(this.id)

        this.VolunteerService.GetOneVolunteer_Id(this.id).subscribe(
          (response:any) => {this.Results=JSON.parse(JSON.stringify(response))
            console.log(this.Results.Email)

            this.User.id=this.Results._userId;
            this.User.Email=this.Results.Email;
            this.SignupForm.patchValue({
              Email:this.User.Email,  
            })
        
          },
          error => console.error('Error!', error))
    })
  }


  onSubmit(){


    this.ApplicationService.Volunteer(this.id,this.Body1).subscribe(
      response=> console.log(response))
    this.VolunteerService.GetOneVolunteer_Id(this.id).subscribe(
      (response:any) => {this.Results=JSON.parse(JSON.stringify(response))
        this.User.id=this.Results._userId;
        console.log(this.User.id)
    
    this.AuthenticationService.VolunteerAccount(this.User.id,this.Body1).subscribe(
      (response:any) => {this.Volunteers= JSON.parse(JSON.stringify(response));
        console.log(response)
        this.openDialog() ; 
      },
        error => console.error('Error!', error))

        //email
        this.AuthenticationService.getAccount(this.User.id).subscribe(
          response => {
            this.Results2=response
         
            console.log(response)
            this.AuthenticationService.email( this.Results2.email).subscribe(
              response => {this.Results=response;
                console.log(response)},
              error => console.error('Error!', error)
            )
        })


  })
  }








}
