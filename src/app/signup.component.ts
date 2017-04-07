import { Component } from  '@angular/core';
import { User } from './user';
import { UserService } from  './user.service';

@Component({
  selector:'signup-form',
  templateUrl:'./signup-form.component.html',
  providers:[UserService]
})
export class SignupComponent{
  constructor(private userService:UserService)//Dependency injection
  {}

  user:User = new User('','');
  onSignupFormSubmit():void{
    this.userService.registerUser(this.user)
                                .subscribe(userr => console.log(userr),
                                          error => console.log('error'+error));

  };
}
