import { AgmCoreModule } from '@agm/core';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { environment } from '../../environments/environment';
import { PendingInterceptorModule } from './common/loading-indicator/pending-interceptor.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    // Displays Loading Bar when a Route Request or HTTP Request is pending
    PendingInterceptorModule,

    // Google Maps Module
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),

    // Layout Module (Sidenav, Toolbar, Quickpanel, Content)
    LayoutModule
  ],
  providers: [
    MatIconRegistry
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
