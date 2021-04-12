import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {VolunteerService} from "../../../Services/volunteer.service";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  Results:any ;
  id:string ;
volunteerId:string;
Profile={
  Firstname:'',
  Lastname:'',
  Gender:'',
  ContactNo1:'',
  ContactNo2:'',
  Skill:'',
  Home_Address:'',

} ;


  constructor(private VolunteerService:VolunteerService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      //  this.volunteerId = params['volunteerId'];
       // console.log(this.volunteerId)   
      })
      this.VolunteerService.GetOneVolunteer(this.id).subscribe(
        response => { this.Results=JSON.parse(JSON.stringify(response)) 
          this.Profile.Firstname=this.Results.Firstname
          this.Profile.Lastname=this.Results.Lastname
          this.Profile.Gender=this.Results.Gender
          this.Profile.ContactNo1=this.Results.ContactNo1
          this.Profile.ContactNo2=this.Results.ContactNo2
          this.Profile.Skill=this.Results.Skill
          this.Profile.Home_Address=this.Results.Home_Address

      })


  }

}
