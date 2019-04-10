import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthserviceService } from '../authservice.service';




@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  

  constructor(private router: Router,private authserviceService:AuthserviceService) { }

  ngOnInit() {
       if(this.authserviceService.check_user_loggedin())
       {
          this.router.navigate(['/dashboard']);
       }
      

  }
   
    getProducts() {
    
    
    this.authserviceService.getProducts().subscribe( response => {
     
     console.log( response);
     
     
    });
  }

}