import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ApplicationService} from '../Services/application.service'
import { Application } from 'src/app/Models/Application';
import { AvailabilityComponent } from 'src/app/Features/task/availability/availability.component';
import {MatDialog} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';import {MatPaginator} from '@angular/material/paginator';
import { SwPush } from '@angular/service-worker';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  title = 'Angular-pwa';
private publicKey= 'BGFx_OQvGFUsYapWUW2iIVkY_1xwJ_lKBQGHkiCI4lRwsmlT7DNl_2NZQK9qqxn_YyVnTsI4IKSuUq_b8qup6wE';
  querycountry='';
  queryTag='';
  queryTrending='' ;
  Results:any  ; 
  Body:any ; 

  Availability={
    Day:'' ,
  }


  constructor(private swPush:SwPush,public dialog:MatDialog, private ApplicationService: ApplicationService, private FormBuilder:FormBuilder, private Router:Router,private activatedRoute: ActivatedRoute) {
/*  
    this.activatedRoute.queryParams.subscribe(data =>{
this.queryTag=data.country; 
this.queryTrending=data.trending;
this.querycountry=data.tag 
this.pushSubscription(); 
    })
    */
   }

   TaskForm = this.FormBuilder.group({
    Day:new FormControl('',[Validators.required]),
});


   ngOnInit(){

  }


/*
  pushSubscription() {
    if (!this.swPush.isEnabled) {
      console.log('Notification is not enabled');
      return;
    }

    this.swPush
      .requestSubscription({
        serverPublicKey: this.publicKey,
      })
      .then((sub) => {
        // Make a post call to serve
        console.log(JSON.stringify(sub));
      })
      .catch((err) => console.log(err));
  }

*/

onSubmit(){
console.log(this.TaskForm.get('Day')!.value)

this.ApplicationService.Days(this.TaskForm.get('Day')!.value).subscribe(
  response => {this.Results=response;
    console.log(response)
  },
  error => console.error('Error!', error)
)
}

}





