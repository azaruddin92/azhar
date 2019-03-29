import { Component } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import {AuthGuardGuard}   from './auth-guard.guard';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 name = 'Lemosys Web Developers';
 copyright = '@ 2019 Azhar';
public is_loggedin: any;
public  email=''; 

  
constructor(private authserviceService:AuthserviceService,private _router:Router) { 

  }
   ngOnInit() {
   }

    Logoutfunc()
   {
     this.authserviceService.mainLogoutfunc();  
     this.is_loggedin=false;
     this._router.navigate(['/login']);
   }
  
}
