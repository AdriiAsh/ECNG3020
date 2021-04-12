import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../Services/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {AuthenticationService} from '../../../Services/authentication.service' ;


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  Status:boolean=true ; 


  User1={
    _id:"",
    Role:"" ,
    email:"",
  }
  
  Results: any;
id:any; 
Task={
  id:'',
  Task_Name:'',
  Task_Priority:'',
  Resources:'',
  Task_Status:'',
  Task_Description:'',
  Date_Task_Began:'',
  Volunteer_id:[]
}
  constructor(public AuthenticationService:AuthenticationService, private Router:Router, private route: ActivatedRoute,private TaskService:TaskService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
    this.TaskService.GetoneTask(this.id).subscribe(
      response => {this.Results=JSON.parse(JSON.stringify(response))
        console.log(this.Results._id)
         this.Task.id = this.Results._id ; 
         this.Task.Task_Name = this.Results.Task_Name ; 
         this.Task.Task_Priority = this.Results.Task_Priority; 
         this.Task.Resources = this.Results.Resources; 
         this.Task.Task_Status = this.Results.Task_Status ; 
         this.Task.Task_Description = this.Results.Task_Description ; 
         this.Task.Date_Task_Began= this.Results.Date_Task_Began; 
         this.Task.Volunteer_id= this.Results.Volunteer_id; 
         
      },
      error => console.error('Error!', error)
    )
    console.log(this.id)
      })
      this.getRole() ;
  }

  Delete(){
    this.TaskService.DeleteTask(this.id).subscribe(
      response => {console.log(response)})
      this.Router.navigate(['/VolunteerTool/Task']) 
  }

  getRole(){
    this.AuthenticationService.getUserRole().subscribe(data=>{
      this.User1 = JSON.parse(JSON.stringify(data))
      })
    }
    
    EOC_Admin():boolean {
      if(this.User1.Role ==="EOC" || this.User1.Role ==="Admin"){
        return true
      }
      else
      return false 
      }

}
