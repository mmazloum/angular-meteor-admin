import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { MaterialModule } from '../../../core/common/material-components.module';
import { ScrollbarModule } from '../../../core/common/scrollbar/scrollbar.module';
import { CalendarEditComponent } from './calendar-edit/calendar-edit.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CalendarModule.forRoot(),
    ScrollbarModule
  ],
  declarations: [CalendarComponent, CalendarEditComponent],
  entryComponents: [CalendarEditComponent]
})
export class CalendarAppModule {
}
