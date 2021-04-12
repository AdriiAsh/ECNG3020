import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../Services/task.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';


interface Priority {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})



export class CreateTaskComponent implements OnInit {

  
  constructor( private Router:Router,private TaskService:TaskService, private FormBuilder:FormBuilder,private route: ActivatedRoute) { }
Results:any ;
Eventid:string  ;  
id:string ; 

  Priorities: Priority[] = [
    {value: 'High', viewValue: 'High'},
    {value: 'Medium', viewValue: 'Medium'},
    {value: 'Low', viewValue: 'Low'},
    {value: 'Predefine', viewValue:'Predefine'}
  ];

  
Task:any ;
  TaskForm = this.FormBuilder.group({
    Task_Name:new FormControl('',[Validators.required]),
    Task_Description:new FormControl('',[Validators.required,Validators.maxLength(150)]),
    Task_Location: new FormControl('',[Validators.required]),
    Resources: new FormControl('',[Validators.required]),
    Task_Priority:new FormControl('',[Validators.required]),
});


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.Eventid = params['Eventid'];
        console.log(this.Eventid)
      })

  }

  onSubmit(){
    console.log(this.TaskForm.value);
    this.TaskService.CreateTask(this.TaskForm.value,this.Eventid).subscribe(
      response => {console.log('Created!', response)
      this.Results=JSON.parse(JSON.stringify(response)) ;
      this.id=this.Results._id ;
      this.Router.navigate(['/VolunteerTool/Task/'+this.id])
    },
      error => console.error('Error!', error)
    )


 //this.openDialog() ;
    
  }


}
