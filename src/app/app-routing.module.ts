import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from  './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from  './dashboard/dashboard.component';

const routes:Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  }
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

  }
)
export  class AppRoutingModule{

}
