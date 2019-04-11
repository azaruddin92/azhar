import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feedsdetail',
  templateUrl: './feedsdetail.component.html',
  styleUrls: ['./feedsdetail.component.css']
})
export class FeedsdetailComponent implements OnInit {
slug:any;
  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit() 
  {
    var slug = this.route.snapshot.params.slug;
    console.log(slug);
  }

}