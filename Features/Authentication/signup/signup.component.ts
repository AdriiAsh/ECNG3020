import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../Services/authentication.service'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {PasswordValidator} from '../password.validator'
import {MatDialog} from '@angular/material/dialog';
import {DialogSignupComponent} from '../../../Dialogs/dialog-signup/dialog-signup.component'
import {DuplicateDialogComponent} from '../../../Dialogs/duplicate-dialog/duplicate-dialog.component'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private AuthenticationService: AuthenticationService, private FormBuilder:FormBuilder, public dialog:MatDialog) { }

openDialog(){
  this.dialog.open(DialogSignupComponent, { disableClose: true });
}

openDialog1(){
  this.dialog.open(DuplicateDialogComponent, { disableClose: true });
}

User1={
  email:'' ,
}

User:any ;
  SignupForm = this.FormBuilder.group({
    email:new FormControl('',[Validators.required, Validators.email]),    
    Password:new FormControl('',[Validators.required,Validators.minLength(6)]), 
    ConfirmPassword:new FormControl(''),
 //   Applicant_Type: ['']
},{validator:PasswordValidator}
);

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.SignupForm.value);
    this.AuthenticationService.getUserEmail(this.SignupForm.value).subscribe(
      response =>{ console.log('Found!', response)
      this.User=response  
   
    if (this.User !== null){
      console.log('You already have an account! Do you want to reset your password')
      this.openDialog1() ;
    }
   else if(this.User === null){
    this.AuthenticationService.signup(this.SignupForm.get('email')!.value,this.SignupForm.get('Password')!.value).subscribe(
      response =>{ console.log('Created!', response)
      this.openDialog() ;
    },
      error => console.error('Error!', error)
    );
  }
})
  }

  
}
