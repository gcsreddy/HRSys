import { Component } from  '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from  '../user/user.service';

@Component({
  selector:'signup-form',
  templateUrl:'./signup-form.component.html',
  providers:[UserService]
})
export class SignupComponent{
  constructor(
    private router:Router,
    private userService:UserService //Dependency injection
  ){}

  user:User = new User('','');
  onSignupSuccess:boolean= true;
  onSignupMessage:string= '';
  onSignupFormSubmit():void{
    this.userService.registerUser(this.user)
      .subscribe(
        resObj => {
          console.log(resObj);
          if(resObj.success === 'true'){
            //read the jwt and save it in localstore
            //redirectTo to dashboard
            this.router.navigate(['/dashboard']);
          }else if(resObj.success === 'false'){
            //redirectTo to login page with error message
            //this.router.navigate(['/login']);
            this.onSignupSuccess = false;
            this.onSignupMessage = resObj.message;
          }
        },
        error => {
          console.log('error'+error);
          //redirectTo to login page with error message
          //this.router.navigate(['/login']);
          this.onSignupSuccess = false;
          this.onSignupMessage = 'An error registering user, please try again';
        }
      );
  };
}
