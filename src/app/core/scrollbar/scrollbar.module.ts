import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollbarComponent } from './scrollbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollbarComponent
  ],
  exports: [
    ScrollbarComponent
  ]
})
export class ScrollbarModule { }
