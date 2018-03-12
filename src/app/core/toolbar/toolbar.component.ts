import { Component, Input, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'vr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input('quickpanel') quickpanel: any;
  @Input('sidenav') sidenav: any;
  isFullscreen: boolean = false;

  showBreadcrumbs: boolean = false;

  constructor() { }

  ngOnInit() { }

  toggleFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }
}
