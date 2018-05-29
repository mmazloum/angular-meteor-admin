import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vr-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {

  isOpen: boolean;
  username: string = "";

  constructor(private router: Router, private zone: NgZone) { }

  ngOnInit() {
    if (Meteor.user()) {
      this.username = Meteor.user().username;
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  logout(): void {
    Meteor.logout(() => {
      this.router.navigate(['/login']).then(() => this.zone.run(() => console.log('logout')));
    });
  }
}
