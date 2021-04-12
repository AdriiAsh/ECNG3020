import { Component, OnInit } from '@angular/core';
import {EOCService} from '../../../Services/eoc.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {UpdateDialogComponent} from '../../../Dialogs/update-dialog/update-dialog.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-eoc',
  templateUrl: './edit-eoc.component.html',
  styleUrls: ['./edit-eoc.component.css']
})
export class EditEOCComponent implements OnInit {
EOC:any ;
  constructor(private dialog:MatDialog, private Router:Router,private EOCService:EOCService, private FormBuilder:FormBuilder,private route: ActivatedRoute) { }

  openDialog(){
    this.dialog.open(UpdateDialogComponent);
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
    this.EOCService.GetProfileEOC().subscribe(
      response => {console.log('Found!', response);
     this.EOC=JSON.parse(JSON.stringify(response)) 
    
     this.EOCForm.patchValue({
      Firstname:this.EOC.Firstname,
      Lastname:this.EOC.Lastname,
      Address: this.EOC.Address,
      Gender:this.EOC.Gender,
      DoB:this.EOC.DoB,
      ContactNo1:this.EOC.ContactNo1,
      ContactNo2:this.EOC.ContactNo2,
      Email:this.EOC.Email,
      Position:this.EOC.Position
     })
    })
  }

  onSubmit(){
    console.log(this.EOCForm.value);
    this.EOCService.UpdateEOC(this.EOCForm.value).subscribe(
      response => console.log('Updated!', response),
      error => console.error('Error!', error)
    )
   
    this.openDialog();  

  }

}
