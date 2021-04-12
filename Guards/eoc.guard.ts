import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import {AuthenticationService } from '../Services/authentication.service';
import 'rxjs/add/operator/map'
import { User } from '../Models/User';
import { retry } from 'rxjs/operators';
import 'rxjs-compat/add/operator/first';
import 'rxjs-compat/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class EOCGuard implements CanActivate {
  User={
    _id:"",
    Role:"" ,
    email:"",
  }
  data:any
  
  constructor(private  _authService: AuthenticationService, private _router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

return this._authService.getUserRole().map(
  (auth) =>  {
   this.User= JSON.parse(JSON.stringify(auth))
      if (this.User.Role==="EOC"||this.User.Role==="Admin") {
        console.log(this.User.Role)
         return true;
      } else {
        this._router.navigate(['/Authorization']);
        return false;
 
      }
  }
).take(1); // Just change this to .take(1)
}
}