import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatRippleModule } from '@angular/material';
import { MessageWidgetComponent } from './message-widget.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatRippleModule
  ],
  declarations: [MessageWidgetComponent],
  exports: [MessageWidgetComponent]
})
export class MessageWidgetModule {
}
