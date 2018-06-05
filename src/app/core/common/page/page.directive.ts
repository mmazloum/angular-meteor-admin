import { Directive } from '@angular/core';

@Directive({
  selector: '[furyPage]',
  host: { 'class': 'fury-page' }
})
export class PageDirective {

  constructor() {
  }

}
