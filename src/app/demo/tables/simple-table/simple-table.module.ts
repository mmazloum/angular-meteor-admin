import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../../core/common/material-components.module';
import {SimpleTableRoutingModule} from './simple-table-routing.module';
import {SimpleTableComponent} from './simple-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SimpleTableRoutingModule,
    MaterialModule
  ],
  declarations: [SimpleTableComponent]
})
export class SimpleTableModule {
}
