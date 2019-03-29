import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; //validation
//import datalist  from '../assets/listdata.json';
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
         //var email =this.loginform.value.email;
         //var password =this.loginform.value.password;  
         var formsdata=this.loginform.value;      
        /*
        var output = this.authserviceService.check_username_password(email, password);
        if(output == true)
        {      
          alert('successfully login!');   
          this.router.navigate(['/dashboard']);      
        }
        else{
          alert('Invalid credential!');    
          this.router.navigate(['/login']);           
        }
        */
      this.authserviceService.checkAuthentication(formsdata).subscribe( response =>
          {
               if(response){
                  this.checkLogin = true;
                  this.router.navigate(['/dashboard']);
               }else{
                  this.checkerror=true;
                  this.checkmessage='Invalid Credential !';
               }
          });
        }
    }
}

 
           

