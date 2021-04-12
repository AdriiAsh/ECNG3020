import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'
import { icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet/dist/images/marker-shadow.png";
import {MapService} from "../../../Services/map.service" ;
import {AuthenticationService} from "../../../Services/authentication.service" ;
import {ApplicationService} from "../../../Services/application.service"
import {VolunteerService} from "../../../Services/volunteer.service"
import { ActivatedRoute, Params, Router } from '@angular/router'
import {Location} from '@angular/common';

@Component({
  selector: 'app-general-map',
  templateUrl: './general-map.component.html',
  styleUrls: ['./general-map.component.css']
})
export class GeneralMapComponent implements AfterViewInit {

  Results:any
  markers:any;
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
profile:any; 
volunteerId:string;
latcord:number=0;
lngcord:number=0;
Application:any ; 
  private map:any ;
  private marker:any

  User={
    Firstname:'',
    Lastname:'',
    ApplicantType:'',
    
    coordinates:[]
  }


  constructor(private VolunteerService:VolunteerService,private MapService:MapService,private Router: Router, private route: ActivatedRoute,private AuthenticationService:AuthenticationService) { }

  ngAfterViewInit(): void {
    
      this.MapService.getAllLocation().subscribe(
        response => {console.log('Success!', response);
        this.Results=response
        console.log(this.Results)
        this.arr=this.Results[0].coordinates
 
        this.VolunteerService.GetAvailability().subscribe(
          response => {console.log('Success!', response);
          console.log(this.volunteerId)
          this.Application=JSON.parse(JSON.stringify(response)) 
          console.log(this.Application)
      
      this.Map() ;
  this.Maker() ;
  this.map.on('click', this.onMapClick)
})
});
}

  Map(){
    this.map= L.map('map').setView([10.490513, -61.221313], 9);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //    tileSize: 512,
     // zoomOffset: -1,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);
  }

  Maker(){
    for (var i = 0; i < this.Results.length; i++) {
     this.profile= "<a href='http://localhost:4200/VolunteerTool/Generalmap/" + this.Results[i]._id + "' target=''>" + "View Profile"+ "</a>" 
      this.markers=[]
      this.markers= L.marker([this.Results[i].coordinates[0], this.Results[i].coordinates[1]])
        .bindPopup(  this.profile
        ).openPopup()
        .addTo(this.map);
    }
  
  }

onClick(e:any) {

}

  Navigate(){
 
    return true
  }

  onMapClick(e:any) {
    alert("You clicked the map at " + e.latlng);
}


}
