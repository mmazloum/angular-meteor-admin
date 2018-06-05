import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../core/common/material-components.module';
import { PageModule } from '../../../core/common/page/page.module';
import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';

@NgModule({
  imports: [
    CommonModule,
    FormWizardRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    PageModule
  ],
  declarations: [FormWizardComponent]
})
export class FormWizardModule {
}
