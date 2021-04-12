import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {VolunteerService} from '../../../Services/volunteer.service';
import {Application} from '../../../Models/Application';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-volunteer-database',
  templateUrl: './volunteer-database.component.html',
  styleUrls: ['./volunteer-database.component.css']
})
export class VolunteerDatabaseComponent implements  AfterViewInit {
  Results:any ;
  ELEMENT_DATA: Application[] = [];
  displayedColumns: string[] = ['Firstname', 'Lastname', 'Home_Address', 'Gender','ContactNo1','ContactNo2','DoB'];
  dataSource = new MatTableDataSource<Application>(this.ELEMENT_DATA);
  constructor(private VolunteerService: VolunteerService) { }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.VolunteerService.GetVolunteers().subscribe(
      response => {this.Results=response,
        console.log(response),
        this.dataSource.data=this.Results as Application[]
      },
      error => console.error('Error!', error)
    )
  }


applyFilter(filterValue: string){
  this.dataSource.filter=filterValue.trim().toLowerCase();
}

}
