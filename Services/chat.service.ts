import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders ,HttpParams,HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
 
@Injectable({
  providedIn: 'root'
})
export class ChatService {

socket:any  ;
readonly uri:string = "http://localhost:3000" ;
  //private socket = io('http://localhost:3000');

  constructor(private Http:HttpClient){
    this.socket= io.io(this.uri)
  } 

listen(eventName:string){
    return new Observable((subscriber)=>{
this.socket.on(eventName, (data:any)=>{
  subscriber.next(data)
})
    });
  }

emit(eventName:string,data:any){
  this.socket.emit(eventName, data);
}


    joinRoom(data:any)
    {
        this.socket.emit('join',data);
    }

    newUserJoined()
    {
        let observable = new Observable<{user:String, message:String,Time:Date,Role:String}>(observer=>{
            this.socket.on('new user joined', (data:any)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    leaveRoom(data:any){
        this.socket.emit('leave',data);
    }

    userLeftRoom(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('left room', (data:any)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    sendMessage(data:any)
    {
        this.socket.emit('message',data);
    }

    GetMessage(data:any)
    { console.log(data)
        this.socket.emit('output-messages',(data:any)=>{
         console.log(data)
          if(data.length){
            data.array.forEach((element:any) => {
             console.log(element)
              this.socket.emit('message',element.Msg)
           });
         }
        });
    }

    newMessageReceived(){
        let observable = new Observable<{user:String, message:String,Time:Date, Role:String}>(observer=>{
            this.socket.on('new message', (data:any)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }


getChat(){
    return this.Http.get('http://localhost:4000/Chat');  
}


}
