import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector:'timesheet',
  templateUrl:'./timesheet.component.html',
  styleUrls:['./timesheet.component.css'],
  providers:[]
})
export class TimesheetComponent implements OnInit{

  
  constructor(
    private router:Router
  ){

  }

  ngOnInit():void{
    //this.authenticateUser();
  }
}
