import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {EOCService} from '../../../Services/eoc.service';
import {EOC} from '../../../Models/EOC';
import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-eoc-database',
  templateUrl: './eoc-database.component.html',
  styleUrls: ['./eoc-database.component.css']
})


export class EocDatabaseComponent implements AfterViewInit {
Results:any ;
ELEMENT_DATA: EOC[] = [];
displayedColumns: string[] = ['Firstname', 'Lastname', 'Address', 'Gender','ContactNo1','Email','Position'];
dataSource = new MatTableDataSource<EOC>(this.ELEMENT_DATA);

  constructor(private EOCService: EOCService) { }

  
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.EOCService.GetAllEOC().subscribe(
      response => {(this.Results=response,
        console.log(response),
        this.dataSource.data=this.Results as EOC[]
      )
      },
      error => console.error('Error!', error)
    )

  }

  
applyFilter(filterValue: string){
  this.dataSource.filter=filterValue.trim().toLowerCase();
}

}
