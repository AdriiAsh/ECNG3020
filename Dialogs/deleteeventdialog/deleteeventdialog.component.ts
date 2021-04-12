import { Component, OnInit } from '@angular/core';
import {EventService} from '../../Services/event.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-deleteeventdialog',
  templateUrl: './deleteeventdialog.component.html',
  styleUrls: ['./deleteeventdialog.component.css']
})
export class DeleteeventdialogComponent implements OnInit {

  constructor(private EventService:EventService, private route: ActivatedRoute) { }
  id:string ;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        console.log(this.id)
      })
  }

  Delete(){
    console.log(this.id)
    this.EventService.DeleteEvent(this.id).subscribe(
      response => {console.log(response)})
  }

}
