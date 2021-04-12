import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../Models/User'


@Injectable({
  providedIn: 'root'
})

export class MapService {



  constructor(private Http:HttpClient) { }
  url = 'http://localhost:4000/Map/'

  UpdateLocation(id:string,Body:any){//Update user location
  console.log(Body)
  console.log(this.url+`Map/${id}`)
    return this.Http.patch(this.url+`Map/${id}`,Body);
  }

  getLocation(id:string){//get user location

    return this.Http.get(this.url+`GetLocation/${id}`);
  }

  getAllLocation(){//get all location
    console.log(this.url+'Map')
    return this.Http.get(this.url+'Map');
  }



}
