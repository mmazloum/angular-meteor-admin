import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackdropModule } from '../common/backdrop/backdrop.module';
import { LoadingIndicatorModule } from '../common/loading-indicator/loading-indicator.module';
import { MaterialModule } from '../common/material-components.module';
import { MediaQueryService } from '../common/mediareplay/media-replay.service';
import { FooterModule } from '../footer/footer.module';
import { QuickpanelModule } from '../quickpanel/quickpanel.module';
import { SidenavModule } from '../sidenav/sidenav.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingIndicatorModule,

    // Core
    ToolbarModule,
    QuickpanelModule,
    SidenavModule,
    FooterModule,
    BackdropModule
  ],
  declarations: [LayoutComponent],
  providers: [MediaQueryService]
})
export class LayoutModule {
}
