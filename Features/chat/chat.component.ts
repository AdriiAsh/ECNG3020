import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '../../Services/authentication.service' ;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  User1={
    _id:"",
    Role:"" ,
    email:"",
  }
  Role:String;
  user:String;
  room:String="Volunteer Coordination" ;
  messageText:String;
  messageArray:Array<{user:String,message:String,Time:Date,Role:String}> = [];

  constructor(public AuthenticationService:AuthenticationService, private ChatService:ChatService) { }

  ngOnInit(): void {
  //      this.ChatService.GetMessage({user:this.user, room:this.room, message:this.messageText});

    this.ChatService.getChat().subscribe(data=>{
      this.messageArray = JSON.parse(JSON.stringify(data))
      })
    

  
  this.getRole() ;
    this.ChatService.listen('test event').subscribe((data:any)=>{
      console.log(data)
    })

   this.ChatService.newUserJoined()
   .subscribe(data=> this.messageArray.push(data));

/*
    this.ChatService.userLeftRoom()
    .subscribe(data=>this.messageArray.push(data));
*/
    this.ChatService.newMessageReceived()
    .subscribe(data=>this.messageArray.push(data));

  }


join(){
    this.ChatService.joinRoom({user:this.user, room:this.room});
}

/*
leave(){
    this.ChatService.leaveRoom({user:this.user, room:this.room});
}
*/

sendMessage()
{
    this.ChatService.sendMessage({user:this.user, room:this.room, message:this.messageText, Role:this.User1.Role});
}

/*
GetMessage(){
this.ChatService.GetMessage((data:any)=>{
  //console.log('Hello')
        }
            )
      }
*/
/*
GetMessage(){
  this.ChatService.GetMessage((data:any)=>{
   //console.log('Hello')
     })}
  */

     GetMessage(){
      this.ChatService.getChat().subscribe(data=>{
        this.messageArray = JSON.parse(JSON.stringify(data))
        })
      }



      getRole(){
        this.AuthenticationService.getUserRole().subscribe(data=>{
          this.User1 = JSON.parse(JSON.stringify(data))
          })
        }
        
        EOC():boolean {
          if(this.User1.Role ==="EOC"){
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
           
              if(this.User1.Role ==="Volunteer"){
                return true
              }
              else
              return false 
              }

}
