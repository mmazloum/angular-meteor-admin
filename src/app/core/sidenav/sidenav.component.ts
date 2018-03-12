import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { NavigationEnd, Router } from "@angular/router";
import isArray from 'lodash-es/isArray';
import keys from 'lodash-es/keys';
import sortBy from 'lodash-es/sortBy';
import { Subscription } from "rxjs";
import { BreadcrumbService } from "../breadcrumb/breadcrumb.service";
import { SidenavItem } from "./sidenav-item/sidenav-item.model";
import { SidenavService } from "./sidenav.service";

@Component({
  selector: 'vr-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit, OnDestroy {

  items: SidenavItem[];

  private _itemsSubscription: Subscription;
  private _routerEventsSubscription: Subscription;

  constructor(
    private sidenavService: SidenavService,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this._itemsSubscription = this.sidenavService.items$
      .subscribe((items: SidenavItem[]) => {
        this.items = this.sortRecursive(items, 'position');
      });

    this._routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.sidenavService.nextCurrentlyOpenByRoute(event.url);
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 400);
      }
    });


    this.breadcrumbService.addFriendlyNameForRoute('/', "Dashboard");
    this.breadcrumbService.addFriendlyNameForRoute('/apps', "Apps");
    this.breadcrumbService.addFriendlyNameForRoute('/apps/inbox', "Inbox");
    this.breadcrumbService.addFriendlyNameForRoute('/apps/calendar', "Calendar");
    this.breadcrumbService.addFriendlyNameForRoute('/apps/chat', "Chat");
    this.breadcrumbService.addFriendlyNameForRoute('/components', "Components");
    this.breadcrumbService.addFriendlyNameForRoute('/components/autocomplete', "Autocomplete");
    this.breadcrumbService.addFriendlyNameForRoute('/components/buttons', "Buttons");
    this.breadcrumbService.addFriendlyNameForRoute('/components/cards', "Cards");
    this.breadcrumbService.addFriendlyNameForRoute('/components/dialogs', "Dialogs");
    this.breadcrumbService.addFriendlyNameForRoute('/components/grid-list', "Grid List");
    this.breadcrumbService.addFriendlyNameForRoute('/components/lists', "Lists");
    this.breadcrumbService.addFriendlyNameForRoute('/components/menu', "Menu");
    this.breadcrumbService.addFriendlyNameForRoute('/components/slider', "Slider");
    this.breadcrumbService.addFriendlyNameForRoute('/components/snack-bar', "Snack-Bar");
    this.breadcrumbService.addFriendlyNameForRoute('/components/tooltips', "Tooltips");
    this.breadcrumbService.addFriendlyNameForRoute('/forms', "Forms");
    this.breadcrumbService.addFriendlyNameForRoute('/forms/form-elements', "Form Elements");
    this.breadcrumbService.addFriendlyNameForRoute('/forms/form-wizard', "Form Wizard");
    this.breadcrumbService.addFriendlyNameForRoute('/tables', "Tables");
    this.breadcrumbService.addFriendlyNameForRoute('/tables/simple-table', "Simple Table");
    this.breadcrumbService.addFriendlyNameForRoute('/tables/fixed-header-table', "Fixed Header Table");
    this.breadcrumbService.addFriendlyNameForRoute('/maps', "Maps");
    this.breadcrumbService.addFriendlyNameForRoute('/maps/google-maps', "Google Maps");
    this.breadcrumbService.addFriendlyNameForRoute('/icons', "Material Icons");
    this.breadcrumbService.addFriendlyNameForRoute('/dashboard-v1', "Dashboard v1");
    this.breadcrumbService.addFriendlyNameForRoute('/drag-and-drop', "Drag & Drop");
    this.breadcrumbService.addFriendlyNameForRoute('/editor', "WYSISYG Editor");
    this.breadcrumbService.addFriendlyNameForRoute('/dynamic-menu', "Dynamic Menu");

    this.breadcrumbService.addFriendlyNameForRoute('/level1', "Level 1");
    this.breadcrumbService.addFriendlyNameForRoute('/level1/level2', "Level 2");
    this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3', "Level 3");
    this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3/level4', "Level 4");
    this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3/level4/level5', "Level 5");

  }

  toggleIconSidenav() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

    this.sidenavService.isIconSidenav = !this.sidenavService.isIconSidenav;

    let snackBarConfig: MatSnackBarConfig = <MatSnackBarConfig>{
      duration: 10000
    };

    if (this.sidenavService.isIconSidenav) {
      this.snackBar.open('You activated Icon-Sidenav, move your mouse to the content and see what happens!', '', snackBarConfig);
    }
  }

  isIconSidenav(): boolean {
    return this.sidenavService.isIconSidenav;
  }

  sortRecursive(array: SidenavItem[], propertyName: string) {
    let that = this;

    array.forEach(function (item) {
      let keyArray = keys(item);
      keyArray.forEach(function (key) {
        if (isArray(item[key])) {
          item[key] = that.sortRecursive(item[key], propertyName);
        }
      });
    });

    return sortBy(array, propertyName);
  };

  ngOnDestroy() {
    this._itemsSubscription.unsubscribe();
    this._routerEventsSubscription.unsubscribe();
  }
}
