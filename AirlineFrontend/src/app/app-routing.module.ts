import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { FlightSelectComponent } from './components/flight-select/flight-select.component';
import { HomeComponent } from './components/home/home.component';
import { AddflightComponent } from './components/addflight/addflight.component';
import { DeleteflightComponent } from './components/deleteflight/deleteflight.component';
import { AdminviewComponent } from './components/adminview/adminview.component';
import {AuthenticationGuard} from './authGuards/authentication.guard';
import {AuthenticationUserGuard} from './authGuards/authentication-user.guard';
import {UnauthorizedGuard} from './authGuards/unauthorized.guard';

const routes: Routes = [
  {path:"",redirectTo: '/home', pathMatch: 'full'},
  {path:"home",component:HomeComponent},
  {path:"adminlogin",component: AdminloginComponent,canActivate:[UnauthorizedGuard]},
  {path:"flightSelect",component:FlightSelectComponent},
  {path: "addflight",component: AddflightComponent,canActivate:[AuthenticationGuard]},
  {path: "deleteflight",component: DeleteflightComponent,canActivate:[AuthenticationGuard]},
  {path: "adminview", component: AdminviewComponent,canActivate:[AuthenticationGuard]},
 
]




@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
