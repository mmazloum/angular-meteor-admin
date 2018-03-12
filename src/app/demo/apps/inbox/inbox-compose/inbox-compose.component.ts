import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  selector: './vr-inbox-compose',
  templateUrl: './inbox-compose.component.html'
})
export class InboxComposeComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<InboxComposeComponent>
  ) { }

  ngOnInit() {
  }

  send() {
    this.dialogRef.close('Your message has been send.');
  }

}
