import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; //validation
//import datalist  from '../assets/listdata.json';
import {Router} from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import  $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 /* validation */
loginform: FormGroup;
submitted = false;
checkerror = false;
checkLogin = false;
checkmessage : string;
//datalist:any=datalist;
  
  
/* validation  private formBuilder: FormBuilder*/

  constructor(private formBuilder: FormBuilder,private router: Router,public authserviceService:AuthserviceService) { }

     ngOnInit() {
        this.loginform = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
       if(this.authserviceService.check_user_loggedin())
       {
          this.router.navigate(['/dashboard']);
       }
   }
 // convenience getter for easy access to form fields
    get func() { return this.loginform.controls; }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginform.invalid) {
            return;
        }else
        {
    
      var formsdata=this.loginform.value;      
      
      this.authserviceService.checkAuthentication(formsdata).subscribe( response =>
          {
               if(response){
                  this.checkLogin = true;
                  this.router.navigate(['/dashboard']);
               }else{
                  this.checkerror=true;                
                 
                  this.checkmessage='Invalid Credential !';
               //  $('.alert').delay(4000).fadeOut(500);
                //setTimeout(() => {     
                 // }, 4000);
             
               }
          });
        }
    }
}

 
           

