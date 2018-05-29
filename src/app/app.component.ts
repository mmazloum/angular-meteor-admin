import { Component, ViewEncapsulation, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vr-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private zone: NgZone) {
  }

  ngOnInit(): void {
    if (Meteor.user()) {
      this.router.navigate(['']).then(() => {
        this.zone.run(() => {console.log('refresh zone')});
      });
    }
    else {
      console.log('no user connected: ', Meteor.user());
      this.router.navigate(['login']);
    }
  }
}
