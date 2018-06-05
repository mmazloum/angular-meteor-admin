import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '../../breadcrumbs/breadcrumbs.module';
import { ScrollbarModule } from '../scrollbar/scrollbar.module';
import { PagePaddingDirective } from './page-padding.directive';
import { PageDirective } from './page.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageDirective, PagePaddingDirective],
  exports: [
    PageDirective,
    PagePaddingDirective,
    ScrollbarModule,
    BreadcrumbsModule
  ]
})
export class PageModule {
}
