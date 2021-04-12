import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ApplicationComponent} from '../Features/Applicant/application/application.component';


@Injectable({
  providedIn: 'root'
})
export class ApplicationGuard implements CanDeactivate<ApplicationComponent> {
  canDeactivate(component:ApplicationComponent){
    if(component.isDirty)
    {
      return window.confirm("Are you sure you want to leave this page, you may have unsaved changes")
    }
    return true;
  }
  
}
