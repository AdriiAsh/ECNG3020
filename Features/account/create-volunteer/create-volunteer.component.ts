import { Component, OnInit } from '@angular/core';
import {VolunteerService} from '../../../Services/volunteer.service'
import {ApplicationService} from '../../../Services/application.service';
import {Application} from '../../../Models/Application' ;
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-create-volunteer',
  templateUrl: './create-volunteer.component.html',
  styleUrls: ['./create-volunteer.component.css']
})
export class CreateVolunteerComponent implements OnInit {
Results:any;
ELEMENT_DATA: Application[] = [];

  constructor( private VolunteerService:VolunteerService, private ApplicationService:ApplicationService) { }


  displayedColumns: string[] = ['_id','Firstname', 'Lastname', 'Date_created'];
  dataSource = new MatTableDataSource<Application>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.ApplicationService.GetAcceptedApplication().subscribe(
      response => {this.Results=response;
        this.dataSource=this.Results},
      error => console.error('Error!', error)
    )
  }

}
