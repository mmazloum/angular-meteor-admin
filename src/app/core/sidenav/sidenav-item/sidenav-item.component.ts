import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { Input } from "@angular/core";
import { SidenavItem } from "./sidenav-item.model";
import { SidenavService } from "../sidenav.service";

@Component({
  selector: 'vr-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavItemComponent implements OnInit {

  @Input('item')
  item: SidenavItem;

  @HostBinding('class.open')
  get isOpen() {
    return this.sidenavService.isOpen(this.item);
  }

  @HostBinding('class.sidenav-item') sidenavItemClass: boolean = true;

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
  }

  toggleDropdown(): void {
    if (this.item.hasSubItems()) {
      this.sidenavService.toggleCurrentlyOpen(this.item);
    }
  }

  // Receives the count of Sub Items and multiplies it with 48 (height of one SidenavItem) to set the height for animation.
  getSubItemsHeight(): string {
    return (this.getOpenSubItemsCount(this.item) * 48) + "px";
  }

  // Counts the amount of Sub Items there is and returns the count.
  getOpenSubItemsCount(item: SidenavItem): number {
    let count = 0;

    if (item.hasSubItems() && this.sidenavService.isOpen(item)) {
      count += item.subItems.length;

      item.subItems.forEach((subItem) => {
        count += this.getOpenSubItemsCount(subItem);
      })
    }

    return count;
  }
}
