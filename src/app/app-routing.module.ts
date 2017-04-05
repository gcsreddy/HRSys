import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from  './login.component';
import { SignupComponent } from './signup.component';

const routes:Routes = [
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
    redirectTo:'/login',
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