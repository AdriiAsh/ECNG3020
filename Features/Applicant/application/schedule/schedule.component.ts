import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ApplicationService} from '../../../../Services/application.service'
import {Availability} from '../../../../Models/Availability'
import {ApplicationdialogComponent} from '../../../../Dialogs/applicationdialog/applicationdialog.component'; 
import { Application } from 'src/app/Models/Application';
import { AvailabilityComponent } from 'src/app/Features/task/availability/availability.component';
import {MatDialog} from '@angular/material/dialog';



interface Select {
  value: string;
  viewValue: string;
}

interface Select1 {
  value: Number;
  viewValue: string;
}


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

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
  Results:any ; 
Avail:Availability[];
Application=[{
  Day:'',
  TimeStart: '',
  AM_PM:'',
  TimeEnd: '',
  AM_PM1:''
}]

  constructor( public dialog:MatDialog, private ApplicationService: ApplicationService, private FormBuilder:FormBuilder, private Router:Router) { }
  ApplicationForm = this.FormBuilder.group({
    Availability:this.FormBuilder.array([
    this.AddAvailability()
  ])
  });

  openDialog(){
    this.dialog.open(ApplicationdialogComponent, { disableClose: true });

  }
  
  ngOnInit(): void {
    this.ApplicationService.GetApplicantApplication().subscribe(
      response => {console.log('Success!', response);
     this.Results=JSON.parse(JSON.stringify(response)) 
     this.Application=this.Results.Availability
     console.log(this.Application)
  this.ApplicationForm.setControl('Availability',this.setExistingAvalability(this.Application))
})
  }

  setExistingAvalability(Availabilities:Availability[]): FormArray {
const formArray=new FormArray([]);
Availabilities.forEach(s => {
 formArray.push(this.FormBuilder.group({
    Day:s.Day,
    TimeStart: s.TimeStart,
    AM_PM: s.AM_PM,
    TimeEnd: s.TimeEnd,
    AM_PM1:s.AM_PM1
  }))
});
console.log(formArray)
return formArray;
  }

/*
  ApplicationForm = this.FormBuilder.group({
  Availability: this.FormBuilder.array([
//this.AddAvailability()
  ])
  }) ; 
*/
Delete(skillindex:number):void{
(<FormArray>this.ApplicationForm.get('Availability')).removeAt(skillindex)
}


AddAvailability(): FormGroup {

  return this.FormBuilder.group({
    Day: new FormControl(''),
    TimeStart: new FormControl(''),
    AM_PM: new FormControl(''),
    TimeEnd: new FormControl(''),
  AM_PM1:new FormControl('')
  })

}

 
AddAvailabilityButton(): void{
  (this.ApplicationForm.get('Availability') as FormArray)!.push(this.AddAvailability())

}


get aliasesArrayControl() {
  return this.ApplicationForm.get('Availability') as FormArray
}




onSubmit(){
this.Application=this.ApplicationForm.value ;
this.ApplicationService.UpdateAvailability(this.ApplicationForm.get('Availability')!.value).subscribe(
  response => console.log('Updated!', response),
  error => console.error('Error!', error)
  
)

this.openDialog();
    }

    get userFormGroups() {
      return (this.ApplicationForm.get('Availability') as FormArray).controls
    }
  

}
