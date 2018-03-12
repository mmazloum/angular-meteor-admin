import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {MaterialModule} from '../../../core/common/material-components.module';
import {InboxComposeComponent} from './inbox-compose/inbox-compose.component';
import {InboxRoutingModule} from './inbox-routing.module';
import {InboxComponent} from './inbox.component';
import {MailService} from './mail.service';

@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule,
    MaterialModule,
    FormsModule,
    QuillModule
  ],
  declarations: [InboxComponent, InboxComposeComponent],
  entryComponents: [InboxComposeComponent],
  providers: [MailService]
})
export class InboxModule {
}
