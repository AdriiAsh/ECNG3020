import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../Services/authentication.service';
import {EOCService} from '../../../Services/eoc.service';
import {VolunteerService} from '../../../Services/volunteer.service';
import {EOC} from '../../../Models/EOC';
import {MapService} from "../../../Services/map.service" ;
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EOCFirstDialogComponent } from 'src/app/Dialogs/eocfirst-dialog/eocfirst-dialog.component';


@Component({
  selector: 'app-myvolunteer-profile',
  templateUrl: './myvolunteer-profile.component.html',
  styleUrls: ['./myvolunteer-profile.component.css']
})
export class MyvolunteerProfileComponent implements OnInit {

  EOC:any ;
  Volunteer:any; 
  Results:any; 
  e:any ; 
  id:string ;
  volunteerId:string;
  latcord:number=0;
  lngcord:number=0;
User={
  coordinates:[]
}


  private map:any ;
  private marker:any

  User1={
    _id:"",
    Role:"" ,
    email:"",
  }

  Profile={
    Firstname:'',   
    Lastname:'',
    Home_Address:'',
    Gender:'',
    ContactNo1:'', 
    ContactNo2:'',
    Email:'',
    Skill:'',
    Position:'',
  }




  constructor(private Router:Router,private MapService:MapService,private AuthenticationService:AuthenticationService, private EOCService:EOCService, private VolunteerService:VolunteerService) { }

  ngOnInit(): void {
    this.MyProfile() ; 
  }

  MyProfile(){
    this.AuthenticationService.getUserRole().subscribe(data=>{
      this.User1 = JSON.parse(JSON.stringify(data))
      console.log(data)
      console.log('I am a Volunteer')
      this.Geolocation() ; 
      this.VolunteerService.GetVolunteer().subscribe(
        response =>{this.Volunteer=JSON.parse(JSON.stringify(response))
  
          this.Profile.Firstname=this.Volunteer.Firstname;
          this.Profile.Lastname=this.Volunteer.Lastname;
          this.Profile.Home_Address=this.Volunteer.Home_Address;
          this.Profile.Gender=this.Volunteer.Gender;
          this.Profile.ContactNo1=this.Volunteer.ContactNo1
          this.Profile.ContactNo2=this.Volunteer.ContactNo2
          this.Profile.Email=this.Volunteer.Email
          this.Profile.Skill =this.Volunteer.Skill
        },
        error => console.error('Error!', error)
         )
    })
  }

    Geolocation(){
      const SuccessCallback=(position:any)=>{
        console.log(position)
    
    this.latcord=position.coords.latitude
    this.lngcord=position.coords.longitude
    console.log(this.lngcord)
    this.User.coordinates!
    this.MapService.UpdateLocation(this.User1._id,[this.latcord,this.lngcord]).subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
    console.log(position.coords.longitude)
      }
    
      const errorCallback=(error:any)=>{
        console.log(error)
      }
    
      navigator.geolocation.getCurrentPosition(SuccessCallback, errorCallback)
    }
    

    Edit(){
      this.Router.navigate(['/VolunteerTool/MyVolunteerProfile/Edit']) 
    }






    }





    















