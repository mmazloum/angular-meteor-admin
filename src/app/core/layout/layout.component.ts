import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fury-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
}
