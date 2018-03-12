import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-toolbar-notifications',
  templateUrl: './toolbar-notifications.component.html',
  styleUrls: ['./toolbar-notifications.component.scss']
})
export class ToolbarNotificationsComponent implements OnInit {

  isOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }
}
