import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'
import { icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet/dist/images/marker-shadow.png";
import {MapService} from "../../../Services/map.service" ;
import {TaskService} from "../../../Services/task.service" ;
import {AuthenticationService} from "../../../Services/authentication.service" ;
import {ApplicationService} from "../../../Services/application.service"
import {VolunteerService} from "../../../Services/volunteer.service"
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{

//User={
 // id:"6052addb1729212c0488ffdb"
//}
  Results:any
  lat=10.711646 ;
  lng =-61.469074;
  geo:any ; 
  geolat: number=0 ; 
  geolng:number=0 ; 
  latlng: any ; 
  e:any ; 
  arr:any ;
  info:any ; 

  popup:any ; 
  id:string ;

volunteerId:string;
latcord:number=0;
lngcord:number=0;
Application:any ; 
  private map:any ;
  private marker:any
Body:''  ; 
  User={
    Firstname:'',
    Lastname:'',
    ApplicantType:'',
    Email:'',
    coordinates:[]
  }

  constructor(private _location: Location, private Router:Router, private VolunteerService:VolunteerService,private TaskService:TaskService,private MapService:MapService,private router: Router, private route: ActivatedRoute,private AuthenticationService:AuthenticationService) { }
  
  

  ngAfterViewInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.volunteerId = params['volunteerId'];
        console.log(this.volunteerId)   
      })
      //Get location of user
      this.MapService.getLocation(this.volunteerId).subscribe(
        response => {console.log('Success!', response);
        this.Results=JSON.parse(JSON.stringify(response)) 
        console.log(this.Results.coordinates)
        this.arr=this.Results.coordinates
        this.User.Email=this.Results.email

        this.VolunteerService.GetOneVolunteer(this.volunteerId).subscribe(
          response => {console.log('Success!', response);
          console.log(this.volunteerId)
          this.Application=JSON.parse(JSON.stringify(response)) 
          console.log(this.Application)
       
this.info= "<dd>" + "Name: " + this.Application.Firstname + " "+ this.Application.Lastname + "</dd>" 
          +"<dd>" + "Applicant Type: "+this.Application.Skill[0].Applicant_Type + "</dd>" +"<dd>" +"Equipment Owned: "+ this.Application.Skill[0].Equipments_Owned + "</dd>"  
  this.Map() ;
  this.Maker() ;

})
});
}

  Map(){
    this.map= L.map('map').setView( this.arr, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //    tileSize: 512,
     // zoomOffset: -1,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);
  }


  Maker(){
    L.marker( this.arr).addTo(this.map)
    .bindPopup(this.info)
    .openPopup();
  }

AssignTask(){
  this.TaskService.AssignTask(this.Body,this.volunteerId,this.id).subscribe(
    response =>{console.log('Updated!', response)
    this._location.back();
  },
    error => console.error('Error!', error)
  );
  console.log(this.User.Email)
  this.AuthenticationService.Task_email(this.User).subscribe(
    response =>{console.log('Updated!', response)
    this._location.back();
  },
    error => console.error('Error!', error)
  );


  
}
  
}
