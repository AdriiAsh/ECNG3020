import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../Services/event.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeleteeventdialogComponent} from '../../../Dialogs/deleteeventdialog/deleteeventdialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthenticationService} from '../../../Services/authentication.service' ;


@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  Status:boolean=true ; 

  User1={
    _id:"",
    role:"" ,
    email:"",
  }


  id:string ;
  Results:any ;
  Event={
    _id:'',
    Event_Name:'',
    Event_Date:'',
    Event_Description:'',
    Event_Location:'',
    Event_Type:''

  }
  _id:string;

  constructor( public AuthenticationService:AuthenticationService, public dialog:MatDialog, private Router:Router, private route: ActivatedRoute,private EventService:EventService) { }

  openDialog(){
    this.dialog.open(DeleteeventdialogComponent, 
      { disableClose: true,
        data:{
          route:this.route
        }
      },    
      );
  }



  ngOnInit(): void {
    this.getRole() ;
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      })
        this.EventService.GetoneEvent(this.id).subscribe(
          response => {this.Results=JSON.parse(JSON.stringify(response))
            console.log(this.Results._id)
             this.Event._id = this.Results._id ; 
             this.Event.Event_Name = this.Results.Event_Name; 
             this.Event.Event_Date = this.Results.Event_Date; 
             this.Event.Event_Description = this.Results.Event_Description; 
             this.Event.Event_Location = this.Results.Event_Location; 
             this.Event.Event_Type = this.Results.Event_Type; 
          },
          error => console.error('Error!', error)
        )
        console.log(this.id)
        
        console.log(this.User1)
  }


  getRole(){
    this.AuthenticationService.getUserRole().subscribe(data=>{
      this.User1 = JSON.parse(JSON.stringify(data))
      })
    }
    
    EOC_Admin():boolean {
    
      console.log(this.User1)
      if(this.User1.role ==="EOC" || this.User1.role ==="Admin"){
        return true
      }
      else
      return false 
      }
    



}
