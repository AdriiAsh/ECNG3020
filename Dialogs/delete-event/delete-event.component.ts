import { Component, OnInit } from '@angular/core';
import {EventService} from '../../Services/event.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {
  id:string ;
  constructor(private EventService:EventService, private route: ActivatedRoute, private Router:Router) { }

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
      response => {console.log(response)
        this.Router.navigate(['/VolunteerTool/Event']) 
      },
      error => console.error('Error!', error)
      )

  }



}
