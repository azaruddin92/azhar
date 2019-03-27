import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegistrationComponent}   from './registration/registration.component';
import {LoginComponent}   from './login/login.component';
import {DashboardComponent}   from './dashboard/dashboard.component';
import {InventoryComponent}   from './inventory/inventory.component';
import {PagenotfoundComponent}   from './pagenotfound/pagenotfound.component';
 

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inventory', component: InventoryComponent},
   {path: '**', component: PagenotfoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
