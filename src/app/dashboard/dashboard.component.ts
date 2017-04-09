import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from  '../user/user.service';
@Component({
  selector:'dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls:['./dashboard.component.css'],
  providers:[UserService]
})
export class DashboardComponent{

}
