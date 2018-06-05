import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { FuryCardModule } from '../../../core/common/card/card.module';
import { HighlightModule } from '../../../core/common/highlightjs/highlight.module';
import { MaterialModule } from '../../../core/common/material-components.module';
import { PageModule } from '../../../core/common/page/page.module';
import { FormElementsRoutingModule } from './form-elements-routing.module';
import { FormElementsComponent } from './form-elements.component';

@NgModule({
  imports: [
    CommonModule,
    FormElementsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,

    // Core
    HighlightModule,
    FuryCardModule,
    PageModule,
    BreadcrumbsModule
  ],
  declarations: [FormElementsComponent]
})
export class FormElementsModule {
}
