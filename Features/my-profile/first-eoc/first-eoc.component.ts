import { Component, OnInit } from '@angular/core';
import {EOCService} from '../../../Services/eoc.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EOCFirstDialogComponent } from 'src/app/Dialogs/eocfirst-dialog/eocfirst-dialog.component';
import { EOCFirstDialog2Component } from 'src/app/Dialogs/eocfirst-dialog2/eocfirst-dialog2.component';

@Component({
  selector: 'app-first-eoc',
  templateUrl: './first-eoc.component.html',
  styleUrls: ['./first-eoc.component.css']
})
export class FirstEOCComponent implements OnInit {

  constructor(private dialog:MatDialog, private Router:Router,private EOCService:EOCService, private FormBuilder:FormBuilder,private route: ActivatedRoute) { }
isDirty=true ; 

openDialog(){
  this.dialog.open(EOCFirstDialogComponent);
}


  openDialog2(){
    this.dialog.open(EOCFirstDialog2Component, { disableClose: true });
  }



  EOCForm = this.FormBuilder.group({
    Firstname: new FormControl('',[Validators.required]),
    Lastname:new FormControl('',[Validators.required]),
    Address: new FormControl('',[Validators.required]),
    Gender:new FormControl('',[Validators.required]),
    DoB:new FormControl('',[Validators.required]),
    ContactNo1:new FormControl('',[Validators.required]),
    ContactNo2:[''],
    Email:new FormControl('',[Validators.required, Validators.email]),
    Position:new FormControl('',[Validators.required]),
});




  ngOnInit(): void {
    this.openDialog2(); 
  }


  onSubmit(){
    console.log(this.EOCForm.value);
    this.EOCService.CreateEOC(this.EOCForm.value).subscribe(
      response => console.log('Created!', response),
      error => console.error('Error!', error)
    )
   
    this.openDialog();  
    this.isDirty=false ;
   // this.Router.navigate(['/VolunteerTool/MyProfile'])
  }


}
