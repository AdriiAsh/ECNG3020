import { Component, AfterViewInit} from '@angular/core';
import {TaskService} from '../../Services/task.service';
import {Task} from '../../Models/Task' ;
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {AuthenticationService} from '../../Services/authentication.service';
import {EOCService} from '../../Services/eoc.service';
import {VolunteerService} from '../../Services/volunteer.service';
import {EOC} from '../../Models/EOC';
import {MapService} from "../../Services/map.service" ;
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EOCFirstDialogComponent } from 'src/app/Dialogs/eocfirst-dialog/eocfirst-dialog.component';

interface Priority {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements AfterViewInit {
  Results:any;
  User1={
    _id:"",
    Role:"" ,
    email:"",
  }
  


  
 ELEMENT_DATA: Task[] = [];
  constructor( private TaskService:TaskService, private Router:Router,private MapService:MapService,private AuthenticationService:AuthenticationService, private EOCService:EOCService, private VolunteerService:VolunteerService) { }
 
  Priorities: Priority[] = [
    {value: 'High', viewValue: 'High'},
    {value: 'Medium', viewValue: 'Medium'},
    {value: 'Low', viewValue: 'Low'},
    {value: 'Predefine', viewValue:'Predefine'}
  ];

  displayedColumns: string[] = ['Task_Name', 'Task_Priority', 'Task_Status', 'Date_Task_Began'];
  dataSource = new MatTableDataSource<Task>(this.ELEMENT_DATA);
  
  ngAfterViewInit(): void {
    
    this.Tasks()
    
  }

Tasks(){
  this.AuthenticationService.getUserRole().subscribe(data=>{
    this.User1 = JSON.parse(JSON.stringify(data))
    console.log(data)
    
  
if(this.User1.Role ==="Admin"||this.User1.Role==="EOC"){
  console.log('I am a EOC or Admin')

  this.TaskService.GetEOCTask().subscribe(
    response => {this.Results=response;
      this.dataSource.data =this.Results as Task[]},
    error => console.error('Error!', error)
  )
}

else if(this.User1.Role==="Volunteer"){
  console.log('I am a Volunteer')
  this.TaskService.GetVolunteerTask().subscribe(
    response => {this.Results=response;
      console.log(response)
      this.dataSource.data =this.Results as Task[]},
    error => console.error('Error!', error)
  )
}
  })
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


    applyFilter(filterValue: string){
      this.dataSource.filter=filterValue.trim().toLowerCase();
    }
    



    
}
