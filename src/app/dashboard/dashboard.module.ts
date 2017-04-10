import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TimesheetModule } from  '../timesheet/timesheet.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from  './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TimesheetModule,
    DashboardRoutingModule
  ],
  providers: []
})
export class DashboardModule {

}
