import {Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {CalendarEvent, CalendarEventTimesChangedEvent} from 'angular-calendar';
import * as moment from 'moment';
import {Subject} from 'rxjs';
import {fadeInAnimation} from '../../../core/common/route.animation';
import {CalendarEditComponent} from './calendar-edit/calendar-edit.component';

@Component({
  selector: 'vr-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class CalendarComponent implements OnInit {

  view: string = 'month';

  refresh: Subject<any> = new Subject();

  activeDayIsOpen: boolean = true;

  actions: any[] = [{
    label: '<i class="icon">mode_edit</i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.handleEvent('Edited', event);
    }
  }, {
    label: '<i class="icon">delete</i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.snackBar.open('Deleted Event: ' + event.title);
      //this.handleEvent('Deleted', event);
    }
  }];

  viewDate: Date = new Date();

  events: any[] = [{
    start: moment().subtract(1, "days"),
    end: moment().add(1, "days"),
    title: 'A 3 day event',
    color: 'red',
    actions: this.actions
  }, {
    start: moment(),
    end: moment(),
    title: 'A draggable one day event',
    color: 'yellow',
    actions: this.actions,
    draggable: true
  }, {
    start: moment().add(9, "days"),
    end: moment().add(9, "days").add(2, "months"),
    title: 'A long event that spans 2 months',
    color: 'blue'
  }, {
    start: moment().add(2, "hours"),
    end: moment(),
    title: 'A draggable and resizable event',
    color: 'yellow',
    actions: this.actions,
    resizable: {
      beforeStart: true,
      afterEnd: true
    },
    draggable: true
  }];

  handleEvent(action: string, event: CalendarEvent): void {
    let dialogRef = this.dialogRef.open(CalendarEditComponent);
    dialogRef.componentInstance.event = event;

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        event.title = result.title;
        this.snackBar.open('Changed Event: ' + event.title);
        this.refresh.next();
      }
    });
  }

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    if (moment(this.viewDate).isSame(date, 'month')) {
      if (
        (moment(this.viewDate).isSame(date, 'day') && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.snackBar.open('Moved Event: \'' + event.title + '\' to ' + newEnd.getDate() + '.' + newEnd.getMonth() + '.' + newEnd.getFullYear());
    //this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  constructor(
    private dialogRef: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

}
