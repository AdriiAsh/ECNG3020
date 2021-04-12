import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {TaskService} from '../../../Services/task.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateDialogComponent } from 'src/app/Dialogs/update-dialog/update-dialog.component';


interface Priority {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private dialog:MatDialog,private Router:Router,private TaskService:TaskService, private FormBuilder:FormBuilder,private route: ActivatedRoute) { }

  openDialog(){
    this.dialog.open(UpdateDialogComponent, { disableClose: true } );
  }

  Priorities: Priority[] = [
    {value: 'High', viewValue: 'High'},
    {value: 'Medium', viewValue: 'Medium'},
    {value: 'Low', viewValue: 'Low'},
    {value: 'Predefine', viewValue: 'Low'}
  ];
id:string ;
  Taskid:string; 
  Task={
    Task_Name:'',
    Task_Description:'',
    Task_Location: '',
    Task_Status:'', 
    Task_Priority:'',
    Resources:''

  }
  Results:any;
    TaskForm = this.FormBuilder.group({
      Task_Name:new FormControl('',[Validators.required]),
      Task_Description:new FormControl('',[Validators.required, Validators.maxLength(150)]),
      Resources: new FormControl('',[Validators.required]),
      Task_Location: new FormControl('',[Validators.required]),
      Task_Priority:new FormControl('',[Validators.required]),
  });

  
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.Taskid = params['id'];
        console.log(this.Taskid)
      })
      this.TaskService.GetoneTask(this.Taskid).subscribe(
        response => {console.log('Found!', response);
       this.Task=JSON.parse(JSON.stringify(response)) 
       this.TaskForm.patchValue({
        Task_Name:this.Task.Task_Name,
        Task_Description:this.Task.Task_Description,
        Task_Status:this.Task.Task_Status,
        Resources:this.Task.Resources,
        Task_Location: this.Task.Task_Location,
        Task_Priority:this.Task.Task_Priority,
       })
      })
  }



  onSubmit(){
    console.log(this.TaskForm.value)
    this.TaskService.UpdateTask(this.Taskid,this.TaskForm.value).subscribe(
      response =>{ console.log('Success!', response)
      this.Router.navigate(['/VolunteerTool/Task/'+this.Taskid])  
    },
      error => console.error('Error!', error)

    );   

   // this.Router.navigate(['/VolunteerTool/Task'])
  }

}
