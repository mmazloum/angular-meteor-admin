import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'vr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isOpen: boolean;

  @ViewChild('input')
  input: ElementRef;

  constructor(public renderer: Renderer) { }

  ngOnInit() {
  }

  open() {
    this.isOpen = true;

    setTimeout(() => {
      this.renderer.invokeElementMethod(
        this.input.nativeElement, 'focus', []);
    }, 100);

  }

  close() {
    this.isOpen = false;
  }

}
