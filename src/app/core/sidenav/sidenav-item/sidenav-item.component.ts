import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavService } from '../sidenav.service';
import { SidenavItem } from './sidenav-item.interface';

@Component({
  selector: 'fury-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  animations: [
    trigger('dropdownState', [
      state('collapsed', style({
        height: 0
      })),
      state('expanded', style({
        height: '*'
      })),
      transition('collapsed <=> expanded', animate('400ms cubic-bezier(.35, 0, .25, 1)'))
    ])
  ]
})
export class SidenavItemComponent implements OnInit {

  @Input('item') item: SidenavItem;
  @Input('level') level: number;

  isCollapsed$: Observable<boolean>;
  dropdownState$: Observable<string>;

  constructor(private sidenavService: SidenavService, private router: Router) {
    this.isCollapsed$ = this.sidenavService.sidenavState$.pipe(
      map(state => state === 'collapsed')
    );
    this.dropdownState$ = this.sidenavService.currentlyOpen$.pipe(
      map(currentlyOpen => (currentlyOpen.indexOf(this.item) > -1) ? 'expanded' : 'collapsed')
    );
  }

  get levelClass() {
    return `level-${this.level}`;
  }

  ngOnInit() {
  }

  isActive(routeOrFunction: any, pathMatchExact: boolean) {
    if (routeOrFunction && typeof routeOrFunction !== 'function') {
      return this.router.isActive(this.router.parseUrl(routeOrFunction), pathMatchExact || false);
    } else {
      return false;
    }
  }

  handleClick() {
    if (this.item.subItems && this.item.subItems.length > 0) {
      this.sidenavService.toggleItemOpen(this.item);
    } else if (typeof this.item.routeOrFunction === 'string' || this.item.routeOrFunction instanceof String) {
      this.router.navigate([this.item.routeOrFunction]);
    } else if (typeof this.item.routeOrFunction === 'function' || this.item.routeOrFunction instanceof Function) {
      this.item.routeOrFunction();
    } else {
      throw Error('Could not determine what to do, Sidenav-Item has no routeOrFunction set AND does not contain any subItems');
    }
  }
}
