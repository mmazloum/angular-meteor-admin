import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { MaterialModule } from '../../../core/common/material-components.module';
import { PageModule } from '../../../core/common/page/page.module';
import { InboxComposeComponent } from './inbox-compose/inbox-compose.component';
import { InboxMailConfirmDialogComponent } from './inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component';
import { InboxMailLabelListComponent } from './inbox-mail-label-list/inbox-mail-label-list.component';
import { InboxMailLabelComponent } from './inbox-mail-label/inbox-mail-label.component';
import { InboxMailListComponent } from './inbox-mail-list/inbox-mail-list.component';
import { InboxMailStarComponent } from './inbox-mail-star/inbox-mail-star.component';
import { InboxMailComponent } from './inbox-mail/inbox-mail.component';
import { InboxNavigationComponent } from './inbox-navigation/inbox-navigation.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { InboxService } from './inbox.service';

@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    QuillModule,

    // Core
    PageModule
  ],
  declarations: [InboxComponent, InboxNavigationComponent, InboxMailListComponent, InboxMailComponent, InboxMailLabelComponent, InboxMailStarComponent, InboxMailLabelListComponent, InboxMailConfirmDialogComponent, InboxComposeComponent],
  entryComponents: [InboxMailConfirmDialogComponent, InboxComposeComponent],
  providers: [InboxService]
})
export class InboxModule {
}
