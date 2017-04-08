import { Component } from  '@angular/core';

import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from  '../user/user.service';
@Component({
  selector:'login-form',
  templateUrl:'./login-form.component.html',
  providers:[UserService]
})
export class LoginComponent{
  constructor(
    private router:Router,
    private userService:UserService //Dependency injection
  ){}
  user:User = new User('','');
  onLoginSuccess:boolean= true;
  onLoginMessage:string= '';

  onSubmit():void{
    console.log("login user");

      this.userService.loginUser(this.user)
        .subscribe(
          resObj => {
            console.log(resObj);
            if(resObj.success === 'true'){
              //redirectTo to dashboard
              this.router.navigate(['/dashboard']);
            }else if(resObj.success === 'false'){
              //redirectTo to login page with error message
              //this.router.navigate(['/login']);
              this.onLoginSuccess = false;
              this.onLoginMessage = resObj.message;
            }
          },
          error => {
            console.log('error'+error);
            //redirectTo to login page with error message
            //this.router.navigate(['/login']);
            this.onLoginSuccess = false;
            this.onLoginMessage = 'An error occurred, please try again';
          }
        );
  };
}
