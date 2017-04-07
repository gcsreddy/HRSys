import { Component } from  '@angular/core';
import { User } from '../user/user';
@Component({
  selector:'login-form',
  templateUrl:'./login-form.component.html'
})
export class LoginComponent{
  user:User = new User('','');
  onSubmit():void{
    console.log(" heyyyy do the user authentication");
  };
}
