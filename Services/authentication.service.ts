import { Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders ,HttpParams,HttpResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import { User } from '../Models/User';
import { shareReplay, tap } from 'rxjs/operators';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private Http:HttpClient, private router:Router, private webService:WebRequestService )  {}
  url = 'http://localhost:4000/Authentication/'

  public loggedIn(){
    return !!localStorage.getItem('x-access-token')
  }
  
  loginUser(email: string, password: string) {
    console.log(this.webService.login(email, password));
    return this.webService.login(email, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log("LOGGED IN!");
      })
    )
  } 

  signupEOC(email: string, password: string, Role:string) {//Signup for EOC
    console.log(this.webService.signupEOC(email, password, Role));
    return this.webService.signupEOC(email, password, Role).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log("Successfully signed up and now logged in!");
      })
    )
  }

signup(email: string, password: string) {//Signup for Applicant
  console.log(this.webService.signup(email, password));
  return this.webService.signup(email, password).pipe(
    shareReplay(),
    tap((res: HttpResponse<any>) => {
      // the auth tokens will be in the header of this response
      this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
      console.log("Successfully signed up and now logged in!");
    })
  )
}


  Logout () {
    this.removeSession();
    this.router.navigate(['/Login'])
      }

  setAccessToken(accessToken: string) {
    localStorage.setItem('x-access-token', accessToken)
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token')!;
  }

  getUserId() {
    return localStorage.getItem('user-id')!;
  }

  private setSession(userId: string, accessToken: any, refreshToken: any) {
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession() {
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  getNewAccessToken() {
    return this.Http.get(`${this.webService.ROOT_URL}/AccessToken`, {
      headers: {
        'x-refresh-token': this.getRefreshToken(),
        '_id':            this.getUserId()
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
       this.setAccessToken(res.headers.get('x-access-token')!);
     })
   )
  }
  
  getUserRole(){//Get User Role
    return this.Http.get(this.url+'GetUser');
  }

  VolunteerAccount(id:string,Body:any){//Update Applicant account to a Volunteer account
    console.log(this.url+`Account/${id}`,Body);
    return this.Http.patch(this.url+`Account/${id}`,Body);
  }

  getUserEmail(Body:any){//Get User Email entered by user
    console.log(Body)
    return this.Http.post(this.url+'getEmail',Body);
  }

  getSession(){
    return this.Http.get(this.url+'Session');
  }

  UpdatePassword(Body:any){//Update Password field
    console.log(Body)
    console.log(this.url+'UpdatePassword')
    return this.Http.patch(this.url+'UpdatePassword',Body);
  }

  email(Body:any){
    let uri= 'http://localhost:4000/'
    console.log(uri+'sendmail_Volunteer',Body)
    return this.Http.post(uri+'sendmail_Volunteer',Body);
  }

  EOC_email(Body:any){
    let uri= 'http://localhost:4000/'
    console.log(uri+'sendmail_EOC',Body)
    return this.Http.post(uri+'sendmail_EOC',Body);
  }

  Decline_email(Body:any){
    let uri= 'http://localhost:4000/'
    console.log(uri+'sendmail_Decline',Body)
    return this.Http.post(uri+'sendmail_Decline',Body);
  }

  Task_email(Body:any){
    let uri= 'http://localhost:4000/'
    console.log(uri+'sendmail_Task',Body)
    return this.Http.post(uri+'sendmail_Task',Body);
  }

  Resetpassword_email(Body:any){
    let uri= 'http://localhost:4000/'
    console.log(uri+'sReset_password',Body)
    return this.Http.post(uri+'Reset_password',Body);
  }


  getAccount(id:string){//Get User Role
    return this.Http.get(this.url+`getAccount/${id}`);
  }
  



}