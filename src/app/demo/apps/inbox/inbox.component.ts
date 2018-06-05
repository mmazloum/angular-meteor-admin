import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { fadeOutAnimation } from '../../../core/common/route.animation';
import { InboxComposeComponent } from './inbox-compose/inbox-compose.component';

@Component({
  selector: 'fury-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  animations: [fadeOutAnimation],
  host: { '[@fadeOutAnimation]': 'true' }
})
export class InboxComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openCompose() {
    this.dialog.open(InboxComposeComponent);
  }
}
