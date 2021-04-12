import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {EventService} from '../../../Services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(private Router:Router,private EventService:EventService, private FormBuilder:FormBuilder,private route: ActivatedRoute) { }
  id:any ;
  Event:any ; 

  
  EventForm = this.FormBuilder.group({
    Event_Name: new FormControl('',[Validators.required]),          
    Event_Type:new FormControl('',[Validators.required]),
    Event_Description:new FormControl('',[Validators.required, Validators.maxLength(150)]),
    Event_Location:new FormControl('',[Validators.required])

});

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        console.log(this.id)
   
      this.EventService.GetoneEvent(this.id).subscribe(
        response => {console.log('Found!', response);
       this.Event=JSON.parse(JSON.stringify(response)) 
  
       this.EventForm.patchValue({
        Event_Name:this.Event.Event_Name,    
        Event_Type:this.Event.Event_Type,
        Event_Description: this.Event.Event_Description,
        Event_Location:this.Event.Event_Location,
      })
       })
      })
  }

  onSubmit(){
    console.log(this.EventForm.value,this.id)
    this.EventService.UpdateEvent(this.EventForm.value,this.id).subscribe(
      response =>{ console.log('Success!', response)
      this.Router.navigate(['/VolunteerTool/Event/'+this.id]) 
    },
      error => console.error('Error!', error)
    );   

  }



}
