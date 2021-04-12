import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {EOCService} from '../../Services/eoc.service';
import {VolunteerService} from '../../Services/volunteer.service';
import {EOC} from '../../Models/EOC';
import {MapService} from "../../Services/map.service" ;
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EOCFirstDialogComponent } from 'src/app/Dialogs/eocfirst-dialog/eocfirst-dialog.component';




@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  EOC:any ;
  Volunteer:any; 
  Results:any; 
  arr:any ; 
  id:string ;
  volunteerId:string;

  User1={
    _id:"",
    Role:"" ,
    email:"",
  }

  Profile={
    Firstname:'',   
    Lastname:'',
    Address:'',
    Gender:'',
    ContactNo1:'', //Array of numbers
    ContactNo2:'',
    Email:'',
    Skill:'',
    Position:'',
  }


  constructor(private dialog:MatDialog, private Router:Router,private MapService:MapService,private AuthenticationService:AuthenticationService, private EOCService:EOCService, private VolunteerService:VolunteerService) { }

  openDialog(){
    this.dialog.open(EOCFirstDialogComponent, { disableClose: true });
  }



  ngOnInit(): void {
    this.MyProfile() ; 
  }


MyProfile(){
    this.AuthenticationService.getUserRole().subscribe(data=>{
      this.User1 = JSON.parse(JSON.stringify(data))
      console.log(data)
    console.log('I am a EOC or Admin')
    this.EOCService.GetProfileEOC().subscribe(
      response => {this.EOC=JSON.parse(JSON.stringify(response))
        this.Profile.Firstname=this.EOC.Firstname;
        this.Profile.Lastname=this.EOC.Lastname;
        this.Profile.Address=this.EOC.Address;
        this.Profile.ContactNo1=this.EOC.ContactNo1
        this.Profile.ContactNo2=this.EOC.ContactNo2
        this.Profile.Email=this.EOC.Email
        this.Profile.Position=this.EOC.Position       
      },
  error => console.error('Error!', error)
    )
  })

}


Edit(){
this.Router.navigate(['/VolunteerTool/MyProfile/EditEOC'])  
}



}
