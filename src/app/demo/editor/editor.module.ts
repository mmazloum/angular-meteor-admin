import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { MaterialModule } from '../../core/common/material-components.module';
import { PageModule } from '../../core/common/page/page.module';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';

@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule,
    MaterialModule,
    QuillModule,
    PageModule
  ],
  declarations: [EditorComponent]
})
export class EditorModule {
}
