import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {EOC} from '../Models/EOC'


@Injectable({
  providedIn: 'root'
})
export class EOCService {

  constructor(private Http:HttpClient) { }
  url = 'http://localhost:4000/EOC/'

  GetAllEOC(){//Get all EOC Account
    console.log(this.url+'EOC');
    return this.Http.get(this.url+'EOC');
  }

  GetoneEOC(id:string){//Get an EOC member
    console.log(this.url+`EOC/${id}`);
    return this.Http.get(this.url+`EOC/${id}`);
  }

  GetProfileEOC(){//Get the Profile of the EOC
    console.log(this.url+'Profile');
    return this.Http.get(this.url+'Profile');
  }

  CreateEOC(Body:any){//Create a EOC Account
    console.log(this.url+'EOC',Body);
    return this.Http.post(this.url+'EOC',Body);
  }

  UpdateEOC(Body:any){//Update EOC account
    console.log(this.url+'EOC',Body);
    return this.Http.patch(this.url+'EOC',Body);
  }

  DeleteEOC(id:string){//Delete EOC
    console.log(this.url+`EOC/${id}`);
    return this.Http.delete(this.url+`EOC/${id}`);
  }


}
