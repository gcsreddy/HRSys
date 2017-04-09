import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from  '../user/user.service';
@Component({
  selector:'dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls:['./dashboard.component.css'],
  providers:[UserService]
})
export class DashboardComponent implements OnInit{

  //TODO
  //Angular2: How to load data before rendering the component?
  //http://stackoverflow.com/questions/35655361/angular2-how-to-load-data-before-rendering-the-component

  constructor(
    private router:Router,
    private userService:UserService //Dependency injection
  ){

  }

  onLogOut(){
    console.log('logout called');
    //is user authenticated?
    this.userService.logoutuser()
      .subscribe(
        resObj => {
          console.log(resObj);
          this.router.navigate(['/login']);
        },
        error => {
          console.log('error'+error);
          //redirectTo to login
          this.router.navigate(['/login']);
        }
      );
  }

  authenticateUser(){
    //is user authenticated?
    this.userService.authenticate()
      .subscribe(
        resObj => {
          console.log(resObj);
          if(resObj.success === 'true'){
            //redirectTo to dashboard
            this.router.navigate(['/dashboard']);
          }else if(resObj.success === 'false'){
            //redirectTo to login
            this.router.navigate(['/login']);
          }
        },
        error => {
          console.log('error'+error);
          //redirectTo to login
          this.router.navigate(['/login']);
        }
      );
  }
  ngOnInit():void{
    this.authenticateUser();
  }
}
