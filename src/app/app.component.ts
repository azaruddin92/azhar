import { Component } from '@angular/core';
import { AuthserviceService } from './authservice.service';

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
public  username='';
 

 
 
constructor(private authserviceService:AuthserviceService) {
 

  }
   ngOnInit() {
   this.is_loggedin=localStorage.getItem('is_login');
   this.email=localStorage.getItem('email');
   this.username=localStorage.getItem('username');
   console.log(this.is_loggedin);
   
   }

    Logoutfunc()
   {
     this.authserviceService.mainLogoutfunc();  
     this.is_loggedin=false;
   }
  
}
