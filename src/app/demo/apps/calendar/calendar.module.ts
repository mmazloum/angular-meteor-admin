import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'angular-calendar';
import {MaterialModule} from '../../../core/common/material-components.module';
import {CalendarEditComponent} from './calendar-edit/calendar-edit.component';
import {CalendarRoutingModule} from './calendar-routing.module';
import {CalendarComponent} from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    MaterialModule,
    CalendarModule.forRoot()
  ],
  declarations: [CalendarComponent, CalendarEditComponent],
  entryComponents: [CalendarEditComponent]
})
export class CalendarAppModule {
}
