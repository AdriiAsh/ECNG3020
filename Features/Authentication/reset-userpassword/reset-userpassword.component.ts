import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../Services/authentication.service'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { EOCFirstDialogComponent } from 'src/app/Dialogs/eocfirst-dialog/eocfirst-dialog.component';
import {EOCCreatedialogComponent } from 'src/app/Dialogs/eoccreatedialog/eoccreatedialog.component';


@Component({
  selector: 'app-reset-userpassword',
  templateUrl: './reset-userpassword.component.html',
  styleUrls: ['./reset-userpassword.component.css']
})
export class ResetUserpasswordComponent implements OnInit {

  constructor(private dialog:MatDialog, private AuthenticationService:AuthenticationService, private FormBuilder:FormBuilder) { }

  SignupForm = this.FormBuilder.group({
    Email:new FormControl('',[Validators.required, Validators.email]),    
    Password:[this.generatePassword()],
    Role:new FormControl('',[Validators.required]), 
});

  ngOnInit(): void {
    this.dialog.open(EOCCreatedialogComponent, { disableClose: true });
  }


 
  generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal)
    return retVal;
}



}
