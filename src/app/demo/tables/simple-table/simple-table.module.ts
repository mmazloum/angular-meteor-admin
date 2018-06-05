import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { MaterialModule } from '../../../core/common/material-components.module';
import { PageModule } from '../../../core/common/page/page.module';
import { SimpleTableRoutingModule } from './simple-table-routing.module';
import { SimpleTableComponent } from './simple-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SimpleTableRoutingModule,
    MaterialModule,
    PageModule,
    BreadcrumbsModule
  ],
  declarations: [SimpleTableComponent]
})
export class SimpleTableModule {
}
