import { Component, ViewChild, OnInit } from '@angular/core';
import {EventService} from '../../../Services/event.service';
import {Event} from '../../../Models/Event'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EventTaskDialogComponent } from 'src/app/Dialogs/event-task-dialog/event-task-dialog.component';

@Component({
  selector: 'app-task-event',
  templateUrl: './task-event.component.html',
  styleUrls: ['./task-event.component.css']
})
export class TaskEventComponent implements OnInit {
  Results:any;
 ELEMENT_DATA: Event[] = [];
 displayedColumns: string[] = ['Event_Name', 'Event_Type', 'Event_Location', 'Event_Date'];
 dataSource = new MatTableDataSource<Event>(this.ELEMENT_DATA);


  constructor(private dialog:MatDialog,private EventService:EventService) { }

  openDialog(){
    this.dialog.open(EventTaskDialogComponent, { disableClose: true });
  }

  @ViewChild(MatPaginator) paginator:MatPaginator ;

  ngOnInit(): void {
    this.openDialog();
  }

  ngAfterViewInit(): void {    
    this.dataSource.paginator = this.paginator;
    this.EventService.GetAllEvent().subscribe(

      response => {this.Results=response;
        this.dataSource=this.Results},
      error => console.error('Error!', error)
    )

  }
    

}
