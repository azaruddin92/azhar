import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RegistrationComponent}   from './registration/registration.component';
import {LoginComponent}   from './login/login.component';
import {DashboardComponent}   from './dashboard/dashboard.component';
import {InventoryComponent}   from './inventory/inventory.component';
import {PagenotfoundComponent}   from './pagenotfound/pagenotfound.component';
import {AuthGuardGuard}   from './auth-guard.guard';
import {FeedsComponent}   from './feeds/feeds.component'; 
import {FeedsdetailComponent}   from './feedsdetail/feedsdetail.component'; 

 
const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'registration',  component: RegistrationComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate : [AuthGuardGuard]}, //, 
  {path: 'inventory', component: InventoryComponent},
  {path: 'feeds', component: FeedsComponent,canActivate : [AuthGuardGuard]},
  {path: 'feeds/:slug', component: FeedsdetailComponent,canActivate : [AuthGuardGuard]},
  {path: '**', component: PagenotfoundComponent}, 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
