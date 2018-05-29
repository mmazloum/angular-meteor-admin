import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';
import { QuillModule } from 'ngx-quill';
import { environment } from '../../environments/environment';
import { RoutingModule } from '../app-routing.module';
import { nvD3 } from '../core/charts/nvD3/nvD3.component';
import { D3ChartService } from '../core/charts/nvD3/nvD3.service';
import { MaterialModule } from '../core/common/material-components.module';
import { HighlightModule } from '../core/highlightjs/highlight.module';
import { LoadingOverlayComponent } from '../core/loading-overlay/loading-overlay.component';
import { ScrollbarModule } from '../core/scrollbar/scrollbar.module';
import { ActivityComponent } from '../core/widgets/activity/activity.component';
import { BarChartComponent } from '../core/widgets/bar-chart/bar-chart.component';
import { GoogleMapsWidgetComponent } from '../core/widgets/google-maps-widget/google-maps-widget.component';
import { LineChartComponent } from '../core/widgets/line-chart/line-chart.component';
import { MessageWidgetModule } from '../core/widgets/message-widget/message-widget.module';
import { PieChartComponent } from '../core/widgets/pie-chart/pie-chart.component';
import { RecentSalesComponent } from '../core/widgets/recent-sales/recent-sales.component';
import { TrafficSourcesComponent } from '../core/widgets/traffic-sources/traffic-sources.component';
import { ForgotPasswordComponent } from './custom-pages/forgot-password/forgot-password.component';
import { LoginComponent } from './custom-pages/login/login.component';
import { RegisterComponent, RegisterDialogComponent } from './custom-pages/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { EditorComponent } from './editor/editor.component';
import { FormElementsComponent } from './forms/form-elements/form-elements.component';
import { FormWizardComponent } from './forms/form-wizard/form-wizard.component';
import { IconsComponent } from './icons/icons.component';
import { Level5Component } from './levels/level5/level5.component';
import { GoogleMapsComponent } from './maps/google-maps/google-maps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApi
    }),
    QuillModule,
    HighlightModule,
    SortablejsModule,

    ScrollbarModule,

    MessageWidgetModule
  ],
  declarations: [
    FormElementsComponent,
    FormWizardComponent,
    GoogleMapsComponent,
    nvD3,
    IconsComponent,
    Level5Component,
    LoginComponent,
    RegisterComponent,
    RegisterDialogComponent,
    ForgotPasswordComponent,
    EditorComponent,
    DashboardComponent,
    BarChartComponent,
    LineChartComponent,
    RecentSalesComponent,
    PieChartComponent,
    GoogleMapsWidgetComponent,
    ActivityComponent,
    TrafficSourcesComponent,
    LoadingOverlayComponent,
    DragAndDropComponent,
  ],
  providers: [
    D3ChartService
  ],
  entryComponents: [RegisterDialogComponent]
})
export class DemoModule {
}
