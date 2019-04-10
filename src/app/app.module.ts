import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AuthserviceService } from './authservice.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {AuthGuardGuard}   from './auth-guard.guard';
import { HttpClientModule } from '@angular/common/http';
import { FeedsComponent } from './feeds/feeds.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule ],
  declarations: [ AppComponent,  RegistrationComponent, LoginComponent, DashboardComponent, InventoryComponent, PagenotfoundComponent, FeedsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthserviceService,AuthGuardGuard]
})
export class AppModule {}


