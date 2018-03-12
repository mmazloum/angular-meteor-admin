import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../../core/common/material-components.module';
import {ListModule} from '../../../core/list/list.module';
import {AllInOneTableRoutingModule} from './all-in-one-table-routing.module';
import {AllInOneTableComponent} from './all-in-one-table.component';
import {CustomerCreateUpdateModule} from './customer-create-update/customer-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    AllInOneTableRoutingModule,
    FormsModule,
    MaterialModule,

    // Core
    ListModule,
    CustomerCreateUpdateModule
  ],
  declarations: [AllInOneTableComponent],
  exports: [AllInOneTableComponent]
})
export class AllInOneTableModule {
}
