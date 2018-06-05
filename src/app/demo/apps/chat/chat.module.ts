import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../core/common/material-components.module';
import { PageModule } from '../../../core/common/page/page.module';
import { ScrollbarModule } from '../../../core/common/scrollbar/scrollbar.module';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule,
    MaterialModule,

    // Core
    ScrollbarModule,
    PageModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule {
}
