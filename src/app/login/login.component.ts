import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; //validation
import datalist  from '../assets/listdata.json';
import {Router} from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 /* validation */
loginform: FormGroup;
submitted = false;
datalist:any=datalist;
  
  
/* validation  private formBuilder: FormBuilder*/

  constructor(private formBuilder: FormBuilder,private router: Router,public authserviceService:AuthserviceService) { }

     ngOnInit() {
        this.loginform = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
   }
 // convenience getter for easy access to form fields
    get f() { return this.loginform.controls; }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginform.invalid) {
            return;
        }else
        {
          var email =this.loginform.value.email;
          var password =this.loginform.value.password;         
          var flag=0;
          var j=0;                 

          for(j=0;j<datalist.length;j++)
          {           
            if((datalist[j].Email==email) && (datalist[j].Password==password))
            {
              this.authserviceService.loginfunc(datalist[j].Email,datalist[j].Username);
            
              flag=1;             
              break;           
            }else {             
              flag=0;               
             }
          }          
          
          if(flag==1)
          {             
              alert('successfully login!');                 
              this.router.navigate(['/dashboard']);
             
                           
          }else
          { 
              alert('Invalid credential!');    
              this.router.navigate(['/login']);           
          }                
        }      
}
/* validation */

}
