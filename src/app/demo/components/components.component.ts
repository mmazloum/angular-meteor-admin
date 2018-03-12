import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  selector: 'vr-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() {
  }

  scrollTo(elem: string) {
    this[elem].nativeElement.scrollIntoView({
      behavior: 'smooth', // or "auto" or "instant"
      block: 'start', // or "end"
      inline: 'nearest'
    });
  }
}
