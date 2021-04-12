import { Component, OnInit } from '@angular/core';
import { Availability } from 'src/app/Models/Availability';
import {ApplicationService} from '../../../Services/application.service'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  Result1:any ;
  ELEMENT_DATA: Availability[] = [];
  displayedColumns: string[] = ['Day'];
  dataSource = new MatTableDataSource<Availability>(this.ELEMENT_DATA);

Results:any;

  constructor(private ApplicationService:ApplicationService) { }

  ngOnInit(): void {
    this.ApplicationService.GetAvailability().subscribe(data=>{
      this.Results = JSON.parse(JSON.stringify(data));
      console.log(this.Results)
     this.dataSource=this.Results
      console.log(this.Results)})
  }

  


}
