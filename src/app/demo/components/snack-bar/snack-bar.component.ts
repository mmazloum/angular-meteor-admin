import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import escape from 'lodash-es/escape';
import { routeAnimation } from '../../../core/common/route.animation';

@Component({
  selector: 'fury-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class SnackBarComponent implements OnInit {

  snackbarHTML = escape(`<button mat-raised-button (click)="openSnackbar()">TRIGGER SNACKBAR</button>`);

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  openSnackbar() {
    this.snackBar.open('I\'m a notification!', 'CLOSE', {
      duration: 3000,
      horizontalPosition: 'right'
    });
  }
}
