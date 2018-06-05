import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fadeOutAnimation } from '../../core/common/route.animation';
import { ScrollbarDirective } from '../../core/common/scrollbar/scrollbar.directive';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { InputComponent } from './input/input.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressComponent } from './progress/progress.component';
import { RadioComponent } from './radio/radio.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@Component({
  selector: 'fury-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  animations: [fadeOutAnimation],
  host: { '[@fadeOutAnimation]': 'true' }
})
export class ComponentsComponent implements OnInit {

  menuWidth = '250px';
  contentWidth = `calc(100% - ${this.menuWidth})`;

  @ViewChild(AutocompleteComponent, { read: ElementRef }) private autocomplete: ElementRef;
  @ViewChild(ButtonsComponent, { read: ElementRef }) private buttons: ElementRef;
  @ViewChild(CardsComponent, { read: ElementRef }) private cards: ElementRef;
  @ViewChild(CheckboxComponent, { read: ElementRef }) private checkbox: ElementRef;
  @ViewChild(DialogsComponent, { read: ElementRef }) private dialogs: ElementRef;
  @ViewChild(GridListComponent, { read: ElementRef }) private gridList: ElementRef;
  @ViewChild(InputComponent, { read: ElementRef }) private input: ElementRef;
  @ViewChild(ListsComponent, { read: ElementRef }) private lists: ElementRef;
  @ViewChild(MenuComponent, { read: ElementRef }) private menu: ElementRef;
  @ViewChild(ProgressComponent, { read: ElementRef }) private progress: ElementRef;
  @ViewChild(ProgressSpinnerComponent, { read: ElementRef }) private progressSpinner: ElementRef;
  @ViewChild(RadioComponent, { read: ElementRef }) private radio: ElementRef;
  @ViewChild(SliderComponent, { read: ElementRef }) private slider: ElementRef;
  @ViewChild(SlideToggleComponent, { read: ElementRef }) private slideToggle: ElementRef;
  @ViewChild(SnackBarComponent, { read: ElementRef }) private snackBar: ElementRef;
  @ViewChild(TooltipComponent, { read: ElementRef }) private tooltip: ElementRef;

  @ViewChild('contentScroll', { read: ScrollbarDirective }) private contentScroll: ScrollbarDirective;

  constructor() {
  }

  ngOnInit() {
  }

  scrollTo(elem: string) {
    this.contentScroll.scrollbarRef.scrollIntoView(this[elem].nativeElement, {
      offsetTop: 20
    });
  }
}
