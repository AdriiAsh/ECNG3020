import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {PasswordValidator} from '../password.validator'
import {MatDialog} from '@angular/material/dialog';
import {DialogSignupComponent} from '../../../Dialogs/dialog-signup/dialog-signup.component'
import { ActivatedRoute, Params, Router } from '@angular/router';
import {AuthenticationService} from '../../../Services/authentication.service'
import {EOCService} from '../../../Services/eoc.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

Results:any ; 
  constructor(private EOCService:EOCService, public dialog:MatDialog,private AuthenticationService: AuthenticationService, private FormBuilder:FormBuilder, private Router:Router) { }

openDialog(){
  this.dialog.open(DialogSignupComponent);
}

User={
  password:'' , 

}

User1={
  _id:"",
  Role:"" ,
  email:"",
  Password:"", 
  sessions:[], 
First:true,
}
Profile:any; 


  SignupForm = this.FormBuilder.group({
  Password:new FormControl('',[Validators.required,Validators.minLength(6)]), 
  ConfirmPassword:new FormControl('')
 //   Applicant_Type: ['']
},{validator:PasswordValidator}
  );


ngOnInit(): void {
  this.AuthenticationService.getUserRole().subscribe(
    response =>{ console.log('Found!', response)
  })
    
}



  onSubmit(){
this.User.password=this.SignupForm.get('Password')!.value
    this.AuthenticationService.UpdatePassword(this.User).subscribe(
      response =>{ console.log('Found!', response)
    })

  this.AuthenticationService.getUserRole().subscribe(data=>{
      this.Results = JSON.parse(JSON.stringify(data))
     this.User1.sessions=this.Results.sessions
     this.User1.First=this.Results.First
     this.User1.Role=this.Results.Role

           if(this.User1.Role ==="Admin"||this.User1.Role ==="EOC"){
          this.EOCService.GetProfileEOC().subscribe(
            response => {this.Profile=JSON.parse(JSON.stringify(response))
              if(response==null){ 
                  console.log("I am new")  
                  this.Router.navigate(['VolunteerTool/EOCFirst'])     
              }
      else {
          this.Router.navigate(['/VolunteerTool/MyProfile'])
          console.log(this.User1.Role)
      }
        })
        }     
    },  
     error => {console.error('Error!', error);}   
    )
  //})
   
  }

  




}
