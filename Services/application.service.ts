import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Application} from '../Models/Application'


@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

 
  constructor(private Http:HttpClient) { }
   url = 'http://localhost:4000/Application/' ;




   GetAllApplication()  {//Get all applications
    console.log(this.url+'Application')
    return this.Http.get(this.url+'Application');
  }

  GetoneApplication(id:string)  {//Get one application 
    console.log(this.url+`Application/${id}`)
    return this.Http.get(this.url+`Application/${id}`);
  }

  GetAcceptedApplication() {//Get all accepted application
    console.log(this.url+'Accepted')
    return this.Http.get(this.url+'Accepted');
  }

  GetPendingApplication(){//Get all pending application
    return this.Http.get(this.url+'Pending');
  }

  GetDeclinedApplication(){//Get all decline application
    return this.Http.get(this.url+'Declined');
  }

  GetOneAcceptedApplication(){//Get one accepted application
    return this.Http.get(this.url+'OneAccepted');
  }

  GetOnePendingApplication(){//Get one pending application
    return this.Http.get(this.url+'OnePending');
  }

  GetOneDeclinedApplication(){//Get one decline application
    return this.Http.get(this.url+'/OneDeclined');
  }

  CreateApplication(Body:any)  {//Create an application
    console.log(this.url+'Application',Body)
    return this.Http.post(this.url+'Application',Body);
  }

  Accepted(id:string,Body:any){//updated the Status field to Accepted for one application
    console.log(this.url+`Accepted/${id}`,Body)
    return this.Http.patch(this.url+`Accepted/${id}`,Body);
  }

  Declined(id:string,Body:any){//updated the Status field to Decline for one application
    console.log(this.url+`Declined/${id}`,Body)
    return this.Http.patch(this.url+`Declined/${id}`,Body);
  }

  Getvolunteer(id:string){//Get volunteer based on _userId
    return this.Http.get(this.url+`Getvolunteer/${id}`);
  }

  Volunteer(id:string,Body:any){//updated the Status field to Volunteer for one application
    return this.Http.patch(this.url+`Volunteer/${id}`,Body);
  }

UpdateApplication(Body:any){//Update an application

  console.log(this.url+'Application',Body)
    return this.Http.patch(this.url+'Application',Body)
  }

  GetApplicantApplication(){//Get my application
    return this.Http.get(this.url+'Myapplication')
  }


  GetAvailability(){
    return this.Http.get(this.url+'Availability')
  }

  UpdateAvailability(Body:any){  //Update an Availability field
    console.log(Body)
    return this.Http.patch(this.url+'Availability',Body);
  }

  Upload(Body:any){//Upload Picture
    let url1='http://localhost:4000/Upload'
    return this.Http.post(url1,Body);

  }

  Picture(id:string){//get picture
    let url1='http://localhost:4000/'
    return this.Http.get(url1+`files/${id}`);
  }

  Days(Body:any){//Find a document with a specific day
    console.log(this.url+'GetTime', Body)
    return this.Http.post(this.url+'GetTime', Body); 
  }

  GetTimeAMtoPM(Body:any){//Find a document with a specific day
    console.log(this.url+'GetTimeAMtoPM', Body)
    return this.Http.post(this.url+'GetTimeAMtoPM', Body); 
  }


  Reapply(Body:any){
    console.log(this.url+'Reapply', Body)
    return this.Http.patch(this.url+'Reapply', Body); 
  }

  GetOneReapplyingApplication(){
    return this.Http.get(this.url+'Reapply'); 
  }

  AcceptReapply(id:string, Body:any){
    console.log(this.url+`AcceptReapply/${id}`,Body)
    return this.Http.patch(this.url+`AcceptReapply/${id}`,Body);
  }

  DeclineReapply(id:string, Body:any){
    console.log(this.url+`AcceptReapply/${id}`,Body)
    return this.Http.patch(this.url+`AcceptReapply/${id}`,Body);
  }





}
