import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'; //validation



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   /* validation */
  registerform: FormGroup;
  submitted = false;
/* validation  private formBuilder: FormBuilder*/

  constructor(private formBuilder: FormBuilder) {   }

    ngOnInit() {
        this.registerform = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
   }

 // convenience getter for easy access to form fields
    get f() { return this.registerform.controls; }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerform.invalid) {
            return;
        }else {
         // console.log(this.registerform.value.username);
          var username =this.registerform.value.username;
          var email =this.registerform.value.email;
          var password =this.registerform.value.password;


           alert('Registration form submitted!');  
        }
       
}
/* validation */



}