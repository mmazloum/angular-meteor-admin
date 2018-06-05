import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FuryCardModule } from '../../common/card/card.module';
import { LoadingOverlayModule } from '../../common/loading-overlay/loading-overlay.module';
import { MaterialModule } from '../../common/material-components.module';
import { AudienceOverviewWidgetComponent } from './audience-overview-widget.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,

    // Core
    LoadingOverlayModule,
    FuryCardModule,
  ],
  declarations: [AudienceOverviewWidgetComponent],
  exports: [AudienceOverviewWidgetComponent]
})
export class AudienceOverviewWidgetModule {
}
