import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
results:any;
username:any;
email:any;
  constructor(private authserviceService:AuthserviceService) { }

  ngOnInit() {
    this.results=this.authserviceService.getUserProfileInformation();
    this.email=this.results.email;
    this.username=this.results.username;   

  }

}