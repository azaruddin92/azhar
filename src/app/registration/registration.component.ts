import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; //validation
import {Router} from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   /* validation */
  registerform: FormGroup;
  submitted = false;
  checkmessage : string;
  checkRegister = false;
  checkerror=false;
  checkErrorSuccess=false;
  
/* validation  private formBuilder: FormBuilder*/

  constructor(private formBuilder: FormBuilder,private router: Router,private authserviceService:AuthserviceService) {   }

    ngOnInit() {
        this.registerform = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        if(this.authserviceService.check_user_loggedin())
       {
          this.router.navigate(['/dashboard']);
       }
   }

 // convenience getter for easy access to form fields
    get f() { return this.registerform.controls; }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerform.invalid) {
            return;
        }else {
               
          var formsdata=this.registerform.value; 

           this.authserviceService.userNewRegistration(formsdata).subscribe( response =>
          {
          
           if(response && response.status==true)
           {             
              this.checkErrorSuccess=true;
              this.checkmessage=response.message;                     
            
           }else
           {
              this.checkerror=true;
              this.checkmessage=response.message;
           }
          })        

           //this.checkmessage='Invalid Credential !';
           //alert('Registration form submitted!');  
        }       
}
/* validation */



}