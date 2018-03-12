import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../core/common/route.animation';

@Component({
  selector: 'vr-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class FormWizardComponent implements OnInit {

  selectedIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  nextStep() {
    this.selectedIndex += 1;
  }

  previousStep() {
    this.selectedIndex -= 1;
  }

}
