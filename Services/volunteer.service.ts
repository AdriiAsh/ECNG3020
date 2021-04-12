import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Application} from '../Models/Application';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private Http:HttpClient) { }
  url = 'http://localhost:4000/Volunteer/'

  GetVolunteer(){//Get Volunteer
    console.log(this.url+'Volunteer');
    return this.Http.get(this.url+'Volunteer');
  }

  GetVolunteers() {//Get all Volunteer
    console.log(this.url+'Volunteer');
    return this.Http.get(this.url+'Volunteers');
  }

  GetOneVolunteer(_userId:string) {//Get Volunteer based on _userId

    return this.Http.get(this.url+`Volunteer/${_userId}`);
  }

  GetAvailability(){//Get Availability
    return this.Http.get(this.url+'Availability');
  }

  GetOneVolunteer_Id(id:string){//Get Volunteer based on id
    console.log(this.url+`Volunteer_id/${id}`);
    return this.Http.get(this.url+`Volunteer_id/${id}`);
  }

}
