import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FuryChartWidgetModule } from '../../common/chart-widget/chart-widget.module';
import { LoadingOverlayModule } from '../../common/loading-overlay/loading-overlay.module';
import { MaterialModule } from '../../common/material-components.module';
import { LineChartWidgetComponent } from './line-chart-widget.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    LoadingOverlayModule,

    // Chart Widget Style
    FuryChartWidgetModule
  ],
  declarations: [LineChartWidgetComponent],
  exports: [LineChartWidgetComponent]
})
export class LineChartWidgetModule {
}
