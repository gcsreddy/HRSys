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

  constructor(
    private router:Router,
    private userService:UserService //Dependency injection
  ){

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
