import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../Services/authentication.service'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {PasswordValidator} from '../password.validator'
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogLoginComponent } from '../../../Dialogs/dialog-signup/dialog-login/dialog-login.component';
import { EOCFirstDialogComponent } from 'src/app/Dialogs/eocfirst-dialog/eocfirst-dialog.component';
import {EOCService} from '../../../Services/eoc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User1={
    _id:"",
    Role:"" ,
    email:"",
    Password:"", 
    sessions:[], 
  First:true,
  }
Results:any ; 
  Profile:any; 

  constructor( private EOCService:EOCService, public dialog:MatDialog,private AuthenticationService: AuthenticationService, private FormBuilder:FormBuilder, private Router:Router) { }

  openDialog(){
    this.dialog.open(DialogLoginComponent);
  }

  LoginForm = this.FormBuilder.group({
    Email:new FormControl('',[Validators.required]),    
    Password:new FormControl('',[Validators.required]),
})

  ngOnInit(): void {
  }


  onSubmit(){
    this.AuthenticationService.loginUser(this.LoginForm.get('Email')!.value,this.LoginForm.get('Password')!.value).subscribe(
      response => {console.log('Success!', response) ; 
     // this.AuthenticationService.getUserRole().subscribe(data=>{
    //    this.User1 = JSON.parse(JSON.stringify(data))
         
    this.AuthenticationService.getUserRole().subscribe(data=>{
      this.Results = JSON.parse(JSON.stringify(data))
     this.User1.sessions=this.Results.sessions
     this.User1.First=this.Results.First
     this.User1.Role=this.Results.Role

  console.log(this.User1.First)

  if(this.User1.First===true){
        console.log('change password')
      this.Router.navigate(['/ChangePassword'])
      }
          else if(this.User1.Role ==="Admin"||this.User1.Role ==="EOC"){
          this.EOCService.GetProfileEOC().subscribe(
            response => {this.Profile=JSON.parse(JSON.stringify(response))
              if(response===null){ 
                  console.log("I am new")  
                  this.Router.navigate(['VolunteerTool/EOCFirst'])     
              }
              
      else{
          this.Router.navigate(['/VolunteerTool/MyProfile'])
          console.log(this.User1.Role)
      }
        })

        }
         else if(this.User1.Role ==="Volunteer"){
          this.Router.navigate(['/VolunteerTool/MyVolunteerProfile'])
                    console.log(this.User1.Role)
          }         
        else{
      this.Router.navigate(['/Applicant/HomePage'])
      console.log(this.User1.Role)
        }
    })
  //})
    },
    
      error => {console.error('Error!', error);
      this.openDialog()
  }
     
    );
  }



}
