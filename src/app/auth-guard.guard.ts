import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {

constructor(private _authService: AuthserviceService, private _router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   // return true;
   /* if (this._authService.isAuthenticated()) {
        return true;
    }
    */
     // navigate to login page
   // this._router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    //return false;
    if(localStorage.getItem('email')!= null){
        return true;
      }
      else
      {
        this._router.navigate(['/login']);
        return false;
      }




  }

  
}
