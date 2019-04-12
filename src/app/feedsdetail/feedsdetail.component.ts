import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-feedsdetail',
  templateUrl: './feedsdetail.component.html',
  styleUrls: ['./feedsdetail.component.css']
})
export class FeedsdetailComponent implements OnInit {
slug:any;
responsedata:any;
  constructor(private router:Router,private route: ActivatedRoute,private authserviceService:AuthserviceService) { }

  ngOnInit() 
  {
    var slug = this.route.snapshot.params.slug;
       this.authserviceService.getFeedBySlugData(slug).subscribe( response => {     
        this.responsedata= response.data;       
    });
  
  }

}