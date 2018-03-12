import {Component, OnInit} from '@angular/core';
import escape from 'lodash-es/escape';
import {routeAnimation} from '../../../core/common/route.animation';

@Component({
  selector: 'vr-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class FormElementsComponent implements OnInit {

  switch1: boolean = false;
  switch2: boolean = true;
  switch3: boolean = true;
  switch4: boolean = false;
  switch5: boolean = true;

  checkbox1: boolean = false;
  checkbox2: boolean = true;
  checkbox3: boolean = true;
  checkbox4: boolean = false;
  checkbox5: boolean = true;

  select1: string;

  inputFieldHTML: string = `
  <div fxLayout="column" fxLayout.gt-md="row">
    <mat-input-container fxFlex>
      <input matInput
             placeholder="First Name">
    </mat-input-container>
    <mat-input-container fxFlex>
      <input matInput
             placeholder="Last Name">
    </mat-input-container>
  </div>
  <div fxLayout="column" fxLayout.gt-md="row">
    <mat-input-container fxFlex dividerColor="accent">
      <input matInput
             placeholder="Pre-filled Input + Accent color" value="Material Design">
    </mat-input-container>
  </div>
  <div fxLayout="column" fxLayout.gt-md="row">
    <mat-input-container fxFlex>
      <input matInput
             placeholder="Address">
      <span mat-prefix><mat-icon>place</mat-icon></span>
    </mat-input-container>
    <mat-input-container fxFlex>
      <input matInput
             placeholder="City">
      <span mat-prefix><mat-icon>location_city</mat-icon></span>
    </mat-input-container>
    <mat-input-container fxFlex>
      <input matInput
             placeholder="Country">
      <span mat-suffix><mat-icon>local_airport</mat-icon></span>
    </mat-input-container>
  </div>
  <div fxLayout="column" fxLayout.gt-md="row">
    <mat-input-container fxFlex>
      <input matInput
             placeholder="Character count (max. 100)"
             maxlength="100"
             #characterCountHintExample
             value="Hello! How are you today?">
      <mat-hint align="end">{{ characterCountHintExample.value.length }} / 100</mat-hint>
    </mat-input-container>
  </div>
  <div fxLayout="column" fxLayout.gt-md="row">
    <mat-input-container fxFlex>
      <input matInput
             placeholder="Primary Color">
    </mat-input-container>
    <mat-input-container dividerColor="accent" fxFlex>
      <input matInput
             placeholder="Accent Color">
    </mat-input-container>
    <mat-input-container dividerColor="warn" fxFlex>
      <input matInput
             placeholder="Warn Color">
    </mat-input-container>
  </div>
  `;

  constructor() { }

  ngOnInit() {
  }

  getEscaped(text: string) {
    return escape(text);
  }
}
