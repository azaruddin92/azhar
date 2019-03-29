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
