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
   /*
   loginfunc(email,username)
   {
      localStorage.setItem('is_login',true);
      localStorage.setItem('email',email);
      localStorage.setItem('username',username);     
   }
   */

  check_username_password(email: string, password : string)
  {
      if(email == "test1@gmail.com" && password =="123456"){
      localStorage.setItem('email',email);
      localStorage.setItem('is_login',true);
      return true;
      }
      else{
        return false;
      }
  }
  check_user_loggedin()
  {
  if(localStorage.getItem('email'))
  {
   return true;
  }else
  {
   return false;
  }

  }

    
   



}