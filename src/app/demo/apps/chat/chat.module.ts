import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../../core/common/material-components.module';
import {ScrollbarModule} from '../../../core/scrollbar/scrollbar.module';
import {ChatRoutingModule} from './chat-routing.module';
import {ChatComponent} from './chat.component';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    MaterialModule,
    ScrollbarModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule {
}
