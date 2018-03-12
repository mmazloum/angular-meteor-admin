import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BreadcrumbsComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './breadcrumb/breadcrumb.service';
import { ClickOutsideDirective } from './common/click-outside.directive';
import { MaterialModule } from './common/material-components.module';
import { LoadingIndicatorModule } from './loading-indicator/loading-indicator.module';
import { PendingInterceptorModule } from './loading-indicator/pending-interceptor.module';
import { QuickpanelComponent } from './quickpanel/quickpanel.component';
import { ScrollbarModule } from './scrollbar/scrollbar.module';
import { IconSidenavDirective } from './sidenav/icon-sidenav.directive';
import { MediaReplayService } from './sidenav/mediareplay/media-replay.service';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav/sidenav.service';
import { SearchBarComponent } from './toolbar/search-bar/search-bar.component';
import { SearchComponent } from './toolbar/search/search.component';
import { ToolbarNotificationsComponent } from './toolbar/toolbar-notifications/toolbar-notifications.component';
import { ToolbarUserButtonComponent } from './toolbar/toolbar-user-button/toolbar-user-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ScrollbarModule,
    LoadingIndicatorModule,
    PendingInterceptorModule,
    ReactiveFormsModule
  ],
  declarations: [
    SidenavComponent,
    SidenavItemComponent,
    IconSidenavDirective,
    SearchComponent,
    BreadcrumbsComponent,
    AdminComponent,
    QuickpanelComponent,
    ToolbarComponent,
    ToolbarUserButtonComponent,
    ClickOutsideDirective,
    SearchBarComponent,
    ToolbarNotificationsComponent
  ],
  providers: [
    MatIconRegistry,
    MediaReplayService,
    SidenavService,
    BreadcrumbService
  ],
})
export class CoreModule {
}
