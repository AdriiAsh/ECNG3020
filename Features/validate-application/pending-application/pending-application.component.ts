import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../../Services/application.service'
import {Application} from '../../../Models/Application' ;
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-pending-application',
  templateUrl: './pending-application.component.html',
  styleUrls: ['./pending-application.component.css']
})
export class PendingApplicationComponent implements OnInit {
  Results:any
  ELEMENT_DATA: Application[] = [];
    constructor(private ApplicationService:ApplicationService) { }
  
    displayedColumns: string[] = ['_id','Firstname', 'Lastname' , 'Date_created'];
    dataSource = new MatTableDataSource<Application>(this.ELEMENT_DATA);
  
    ngOnInit(): void {
      this.ApplicationService.GetPendingApplication().subscribe(
        response => {this.Results=response;
          this.dataSource=this.Results},
        error => console.error('Error!', error)
      )
    }
  
  
  }
  