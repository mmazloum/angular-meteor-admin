import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SortablejsModule } from 'angular-sortablejs';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DragAndDropComponent } from './drag-and-drop.component';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SortablejsModule,
    PageModule
  ],
  declarations: [DragAndDropComponent]
})
export class DragAndDropModule {
}
