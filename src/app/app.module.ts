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

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,ReactiveFormsModule, ],
  declarations: [ AppComponent,  RegistrationComponent, LoginComponent, DashboardComponent, InventoryComponent, PagenotfoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthserviceService]
})
export class AppModule {}


