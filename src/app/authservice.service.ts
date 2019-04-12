import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthserviceService {
  private serviceurl = 'https://angular.cppatidar.com/angular/webservice/webservice.php';

  is_login: boolean;
  constructor(private http: HttpClient) { }

  mainLogoutfunc() {
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.clear();
  }

  /* check_username_password(email: string, password : string)
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

  check_user_loggedin() {
    if (localStorage.getItem('email')) {
      return true;
    } else {
      return false;
    }
  }

  //checkAuthentication login     
  checkAuthentication(postingdata: any): Observable<any> {
    const parameter = new HttpParams().set('method', "login").set('data', JSON.stringify([{ "email": postingdata.email, "password": postingdata.password }]));

    return this.http.post<any>(this.serviceurl, parameter).pipe(
      map(response => {
        if (response && response.status == true) {
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('username', response.data.username);
          localStorage.setItem('is_login', true);
          return true;
        } else {
          return false;
        }

      })
    );
  }
  //new user registration   
  userNewRegistration(registrationdata: any): Observable<any> {
    const parameter = new HttpParams().set('method', "registration").set('data', JSON.stringify([{ "email": registrationdata.email, "password": registrationdata.password, "username": registrationdata.username }]));
    return this.http.post<any>(this.serviceurl, parameter).pipe(
      map(response => {
        if (response) {
          return response;
        }

      })
    );

  }
  //getting feeds data
  getFeedsData(): Observable<any> {
    const parameter = new HttpParams().set('method', "getFeeds");
    return this.http.post<any>(this.serviceurl, parameter);
  }
  //getting feed Detail data
  getFeedBySlugData(response:any): Observable<any> {
       const parameter = new HttpParams().set('method', "getFeedBySlug").set('data', JSON.stringify([{ "slug": response}]));
       return this.http.post<any>(this.serviceurl, parameter);
  }


}





