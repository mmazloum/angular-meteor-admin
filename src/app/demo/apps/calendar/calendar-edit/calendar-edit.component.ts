import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {CalendarEvent} from 'angular-calendar';
import * as moment from 'moment';

let eventDateFormat: string = 'DD.MM.YYYY, HH:mm';

@Component({
  selector: 'vr-calendar-edit',
  templateUrl: './calendar-edit.component.html',
  styleUrls: ['./calendar-edit.component.scss']
})
export class CalendarEditComponent implements OnInit {

  event: CalendarEvent;
  eventStart: string;
  eventEnd: string;

  constructor(
    private dialogRef: MatDialogRef<CalendarEditComponent>
  ) { }

  ngOnInit() {
    this.event = this.dialogRef.componentInstance.event;
    this.eventStart = moment(this.event.start).format(eventDateFormat);
    this.eventEnd = moment(this.event.end).format(eventDateFormat);
  }

  save() {
    if (this.eventStart) {
      this.event.start = moment(this.eventStart, eventDateFormat).toDate();
    }

    if (this.eventEnd) {
      this.event.end = moment(this.eventEnd, eventDateFormat).toDate();
    }

    this.dialogRef.close(this.event);
  }
}
