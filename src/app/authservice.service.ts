import { Injectable } from '@angular/core';

@Injectable()
export class AuthserviceService {
 is_login:boolean;
  constructor() { }

 mainLogoutfunc()
   {
    localStorage.removeItem('is_login');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.clear();

   }
   loginfunc(email,username)
   {
      localStorage.setItem('is_login',true);
      localStorage.setItem('email',email);
      localStorage.setItem('username',username);
     
   }

    
   



}