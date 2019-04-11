import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthserviceService } from '../authservice.service';




@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  responsedata:any;
  

  constructor(private router: Router,private authserviceService:AuthserviceService) { }

  ngOnInit() {
       if(this.authserviceService.check_user_loggedin())
       {
          this.router.navigate(['/dashboard']);
       }

       this.authserviceService.getFeedsData().subscribe( response => {     
        this.responsedata= response.data;       
    });
      

  }

  
   

    
    
  


}