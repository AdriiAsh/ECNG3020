import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../Services/event.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
id:any ;
Event:any ; 
Results:any ; 
  constructor(private Router:Router,private EventService:EventService, private FormBuilder:FormBuilder,private route: ActivatedRoute) { }

  EventForm = this.FormBuilder.group({
    Event_Name: new FormControl('',[Validators.required]),          
    Event_Type:new FormControl('',[Validators.required]),
    Event_Description:new FormControl('',[Validators.required, Validators.maxLength(150)]),
    Event_Location:new FormControl('',[Validators.required])


});


  ngOnInit(): void {}

  onSubmit(){
    console.log(this.EventForm.value);

    this.EventService.CreateEvent(this.EventForm.value).subscribe(
      response =>{ console.log('Created!', response) 
      this.Results=JSON.parse(JSON.stringify(response)) ;
      this.id=this.Results._id ;    
      this.Router.navigate(['/VolunteerTool/Event/'+this.id]) 
    },
      error => console.error('Error!', error)
    )



  }

    

  




}
