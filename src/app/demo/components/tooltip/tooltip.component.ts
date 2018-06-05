import { Component, OnInit } from '@angular/core';
import escape from 'lodash-es/escape';
import { routeAnimation } from '../../../core/common/route.animation';

@Component({
  selector: 'fury-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class TooltipComponent implements OnInit {

  tooltipHTML = escape(`<button mat-icon-button matTooltip="Favorite this">
  <mat-icon>favorite</mat-icon>
</button>`);

  constructor() { }

  ngOnInit() {
  }
}
