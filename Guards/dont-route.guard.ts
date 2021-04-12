import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {FirstEOCComponent} from '../Features/my-profile/first-eoc/first-eoc.component';




@Injectable({
  providedIn: 'root'
})
export class DontRouteGuard implements CanDeactivate<FirstEOCComponent> {
  canDeactivate(component:FirstEOCComponent){
    if(component.isDirty)
    {
      return window.confirm("Are you sure you want to leave this page, you may have unsaved changes")
    }
    return true;
  }

  
}
