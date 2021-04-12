import { Component, OnInit } from '@angular/core';
import {VolunteerService} from '../../../Services/volunteer.service'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ApplicationService} from '../../../Services/application.service'
import {Availability} from '../../../Models/Availability'
import {ApplicationdialogComponent} from '../../../Dialogs/applicationdialog/applicationdialog.component'; 
import { Application } from 'src/app/Models/Application';
import {MatDialog} from '@angular/material/dialog'
import {MatTableDataSource} from '@angular/material/table';
import {NotvalidTimeComponent} from '../../../Dialogs/notvalid-time/notvalid-time.component'


interface Select {
  value: string;
  viewValue: string;
}


interface Select1 {
  value: Number;
  viewValue: string;
}

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  Results:any;
  Availability:any;
User={
Day: "Wednesday"

}

ELEMENT_DATA: Application[] = [];
displayedColumns: string[] = ['Firstname', 'Lastname', 'Address', 'Gender','ContactNo1'];
dataSource = new MatTableDataSource<Application>(this.ELEMENT_DATA);
  constructor(private dialog:MatDialog,private VolunteerService:VolunteerService,private ApplicationService: ApplicationService, private FormBuilder:FormBuilder, private Router:Router) { }

  openDialog(){
    this.dialog.open(NotvalidTimeComponent, { disableClose: true });
  }


  Day: Select[] = [
    {value: 'Monday', viewValue: 'Monday'},
    {value: 'Tuesday', viewValue: 'Tuesday'},
    {value: 'Wednesday', viewValue: 'Wednesday'},
    {value: 'Thursday', viewValue: 'Thursday'},
    {value: 'Friday', viewValue: 'Friday'},
    {value: 'Saturday', viewValue: 'Saturday'},
    {value: 'Sunday', viewValue: 'Sunday'},
  ];

  Time: Select1[] = [
    {value: 12, viewValue: '12:00'},
    {value: 1, viewValue: '1:00'},
    {value: 2, viewValue: '2:00'},
    {value: 3, viewValue: '3:00'},
    {value: 4, viewValue: '4:00'},
    {value: 5, viewValue: '5:00'},
    {value: 6, viewValue: '6:00'},
    {value: 7, viewValue: '7:00'},
    {value: 8, viewValue: '8:00'},
    {value: 9, viewValue: '9:00'},
    {value: 10, viewValue: '10:00'},
    {value: 11, viewValue: '11:00'},
  ];

  AMPM: Select[] = [
    {value: 'AM', viewValue: 'AM'},
    {value: 'PM', viewValue: 'PM'},
  ];


  ApplicationForm = this.FormBuilder.group({
    Day: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
    AM_PM: new FormControl(''),
    AM_PM1:new FormControl('')
  });

  ngOnInit(): void {
/*
    this.VolunteerService.GetVolunteers().subscribe(
      response => {this.Results=response,
        console.log(response),
        this.dataSource.data=this.Results as Application[]
      },
      error => console.error('Error!', error)
    )
*/

this.ApplicationForm.patchValue({
  Day: "Monday",
  start: 12,
  end: 12,
  AM_PM: "AM",
  AM_PM1:"AM"
})
  }


  onSubmit(){
    console.log(this.User)

  if((this.ApplicationForm.get('AM_PM')!.value === "AM" && this.ApplicationForm.get('AM_PM1')!.value === "AM" && (this.ApplicationForm.get('start')!.value<= this.ApplicationForm.get('end')!.value))
  ||(this.ApplicationForm.get('AM_PM')!.value === "PM" && this.ApplicationForm.get('AM_PM1')!.value === "PM") && (this.ApplicationForm.get('start')!.value<= this.ApplicationForm.get('end')!.value)){
    this.ApplicationService.Days(this.ApplicationForm.value).subscribe(
      response => {
     this.Results = response;
     console.log(response),
     this.dataSource.data=this.Results as Application[]
    console.log(this.Results)})
    console.log("AM to Am or PM to PM or AM to PM")
      }
      else if((this.ApplicationForm.get('AM_PM')!.value === "AM" && this.ApplicationForm.get('AM_PM1')!.value === "PM") ){
    this.ApplicationService.GetTimeAMtoPM(this.ApplicationForm.value).subscribe(
      response => {
     this.Results = response;
     console.log(response),
     this.dataSource.data=this.Results as Application[]
    console.log(this.Results)})
    console.log("PM to AM")
      }
else 
this.openDialog();

  }


}
