import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service' ;
import { ChatService } from 'src/app/Services/chat.service';


@Component({
  selector: 'app-my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.scss'],

})
export class MyNavbarComponent{
  user:String;
  room:String="Volunteer Coordination" ;


  User1={
    _id:"",
    Role:"" ,
    email:"",
  }

  Status:boolean=true ; 

  constructor( public AuthenticationService:AuthenticationService, private ChatService:ChatService) {}

  ngOnInit(): void {
  this.getRole() ;
  }

  EOC_Admin():boolean {
  if(this.User1.Role ==="EOC" || this.User1.Role ==="Admin"){
    return true
  }
  else
  return false 
  }

  Admin():boolean {
   
    if(this.User1.Role ==="Admin"){
      return true
    }
    else
    return false 
    }

    Volunteer():boolean {
      if(this.User1.Role ==="Admin"||this.User1.Role ==="EOC"||this.User1.Role ==="Volunteer"){
        return true
      }
      return false 
      }

      Volunteer1():boolean {
        if(this.User1.Role ==="Volunteer"){
          return true
        }
        return false 
        }
  

getRole(){
this.AuthenticationService.getUserRole().subscribe(data=>{
  this.User1 = JSON.parse(JSON.stringify(data))
  })
}

/*
join(){
  console.log(this.User1.email)

  this.ChatService.joinRoom({user:this.User1.email, room:this.room});
}
*/
}