import { Directive } from '@angular/core';

@Directive({
  selector: '[furyPagePadding]',
  host: { 'class': 'fury-page-padding' }
})
export class PagePaddingDirective {

  constructor() {
  }

}
