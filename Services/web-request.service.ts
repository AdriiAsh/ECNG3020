  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {


  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:4000';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  //EOC/Volunteer
  login(email: string, password: string) {
    console.log(`${this.ROOT_URL}/Authentication/Login`);
    return this.http.post(`${this.ROOT_URL}/Authentication/Login`, {
      email,
      password
    }, {
        observe: 'response'
      });
  }

  
  signupEOC(email: string, password: string, Role:string) {
    console.log(`${this.ROOT_URL}/Authentication/SignupEOC`);
    return this.http.post(`${this.ROOT_URL}/Authentication/SignupEOC`, {
      email,
      password,
      Role
    }, {
        observe: 'response'
      });
  }

  signup(email: string, password: string) {
    console.log(`${this.ROOT_URL}/Authentication/Signup`);
    return this.http.post(`${this.ROOT_URL}/Authentication/Signup`, {
      email,
      password,
    }, {
        observe: 'response'
      });
  }

}