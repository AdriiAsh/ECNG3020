import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Event} from '../Models/Event'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private Http:HttpClient) { }
  url = 'http://localhost:4000/Event/'

  GetAllEvent(){//Get all Events
    console.log(this.url+'Event')
    return this.Http.get(this.url+'Event');
  }

  GetoneEvent(id:string){//Get one Event
    console.log(this.url+`Event/${id}`)
    return this.Http.get(this.url+`Event/${id}`);
  }

  CreateEvent(Body:any){//Create an Event
    console.log(Body)
    console.log(this.url+'Event')
    return this.Http.post(this.url+'Event',Body);
  }

  UpdateEvent(Body:any,id:string){//Update an Event
    console.log(Body)
    console.log(this.url+`Event/${id}`)
    return this.Http.patch(this.url+`Event/${id}`,Body);
  }
  
  DeleteEvent(id:string){//Delete an Event
    console.log(this.url+`Event/${id}`)
    return this.Http.delete(this.url+`Event/${id}`);
  }






}
