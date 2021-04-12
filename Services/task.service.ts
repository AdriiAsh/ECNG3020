import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Task} from '../Models/Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private Http:HttpClient) { }
  url = 'http://localhost:4000/Task/'

  GetAllTask(){//Get all Task
    console.log(this.url+'Task');
    return this.Http.get(this.url+'Task');
  }

  GetoneTask(id:string){//Get one Task
    console.log(this.url+`Task/${id}`);
    return this.Http.get(this.url+`Task/${id}`);
  }

CreateTask(Body:any,Eventid:string){//Create a Task
  console.log(Body);
  console.log(this.url+`Task/${Eventid}`);
  return this.Http.post(this.url+`Task/${Eventid}`,Body);
}

  AssignTask(Body:any,Volunteer_id:string,id:string){
    return this.Http.patch(this.url+`Assign/${id}/${Volunteer_id}`,Body);
  }

  Complete(Body:Task,id:string){//Complete a Task
    return this.Http.patch(this.url+`Complete/${id}`,Body);
  }

  Incomplete(Body:Task,id:string){//Update a Task to incomplete
    return this.Http.patch(this.url+`Incomplete/${id}`,Body);
  }

  DeleteTask(id:string){// Delete a Task
    console.log(this.url+`Task/${id}`);
    return this.Http.delete(this.url+`Task/${id}`);
  }

  UpdateTask(id:string,Body:any){//Update a Task
    console.log(Body);
    console.log(this.url+`Task/${id}`);
    return this.Http.patch(this.url+`Task/${id}`,Body);
  }

  GetVolunteerTask(){//Get one task that belongs to volunteer
    return this.Http.get(this.url+'VolunteerTask');
  }

  GetEOCTask(){//get EOC Task
    console.log(this.url+'EOCTask');
    return this.Http.get(this.url+'EOCTask');
  }
}
