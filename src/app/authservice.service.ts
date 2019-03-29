import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthserviceService {
private serviceurl = 'https://angular.cppatidar.com/angular/webservice/webservice.php';

 is_login:boolean;
  constructor(private http: HttpClient) { }

 mainLogoutfunc()
   {  
      localStorage.removeItem('email');
      localStorage.clear();
   }
 /*
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
  */
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

//checkAuthentication      
checkAuthentication(postingdata: any): Observable<any> {  
  const  parameter = new  HttpParams().set('method', "login").set('data', JSON.stringify([{"email":postingdata.email,"password":postingdata.password}]));

   return this.http.post<any>(this.serviceurl,parameter).pipe(
        map(response => {      
          if (response && response.status==true) {
            localStorage.setItem('username', response.data.username);
            console.log(response.data.username);
            console.log(response.data.email);
            localStorage.setItem('is_login', true);            
            localStorage.setItem('email', response.data.email);                
            return true;
          }
          return false;
        })
    );
   } 


}