import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {EventService} from '../../Services/event.service';
import {Event} from '../../Models/Event'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements AfterViewInit{
  Results:any;
 ELEMENT_DATA: Event[] = [];
 displayedColumns: string[] = ['_id', 'Event_Name', 'Event_Type', 'Event_Location', 'Event_Date'];
 dataSource = new MatTableDataSource<Event>(this.ELEMENT_DATA);

@ViewChild(MatPaginator) paginator:MatPaginator ;

  constructor(private EventService:EventService) { }


  ngAfterViewInit(): void {    
    this.dataSource.paginator = this.paginator;
    this.EventService.GetAllEvent().subscribe(

      response => (this.Results=response,
        this.dataSource.data=this.Results as Event[]),
      error => console.error('Error!', error)
    )

  }
  
  applyFilter(filterValue: string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
  



}
