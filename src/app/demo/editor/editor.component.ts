import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../core/common/route.animation';

@Component({
  selector: 'vr-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class EditorComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
  }

}
