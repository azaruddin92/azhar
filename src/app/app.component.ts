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
  username:any;
  

  
constructor(private authserviceService:AuthserviceService) { 

  }
   ngOnInit() {

  if(localStorage.getItem('email'))
  {
    this.username=localStorage.getItem('email');
  }

   }
    
}
