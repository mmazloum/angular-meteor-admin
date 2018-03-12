import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material';
import { LoadingIndicatorComponent } from './loading-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  declarations: [LoadingIndicatorComponent],
  exports: [LoadingIndicatorComponent],
})
export class LoadingIndicatorModule {
}
