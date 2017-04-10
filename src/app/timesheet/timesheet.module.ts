import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TimesheetRoutingModule } from './timesheet-routing.module';

import { TimesheetComponent } from  './timesheet.component';

@NgModule({
  declarations: [
    TimesheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TimesheetRoutingModule
  ],
  exports:[TimesheetComponent],
  providers: []
})
export class TimesheetModule {

}
