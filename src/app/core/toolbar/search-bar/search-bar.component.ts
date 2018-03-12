import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SidenavItem } from '../../sidenav/sidenav-item/sidenav-item.model';
import { SidenavService } from '../../sidenav/sidenav.service';

@Component({
  selector: 'vr-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  input: string;
  focused: boolean;

  recentlyVisited: SidenavItem[] = [ ];

  constructor(
    private router: Router,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
    this.setupDemoData();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        const item = this.sidenavService.getSidenavItemByRoute(event.urlAfterRedirects);

        if (item) {
          const index = this.recentlyVisited.indexOf(item);
          if (index > -1) {
            this.recentlyVisited.splice(index, 1);
          }

          this.recentlyVisited.unshift(item);

          if (this.recentlyVisited.length > 5) {
            this.recentlyVisited.pop();
          }
        }
      }

    });
  }

  setupDemoData() {
    const formWizard = this.sidenavService.getSidenavItemByRoute('/forms/form-wizard');
    if (formWizard) this.recentlyVisited.push(formWizard);

    const inbox = this.sidenavService.getSidenavItemByRoute('/apps/inbox');
    if (inbox) this.recentlyVisited.push(inbox);

    const allInOneTable = this.sidenavService.getSidenavItemByRoute('/tables/all-in-one-table');
    if (allInOneTable) this.recentlyVisited.push(allInOneTable);

    const editor = this.sidenavService.getSidenavItemByRoute('/editor');
    if (editor) this.recentlyVisited.push(editor);

    const googleMaps = this.sidenavService.getSidenavItemByRoute('/maps/google-maps');
    if (googleMaps) this.recentlyVisited.push(googleMaps);
  }

  openDropdown() {
    this.focused = true;
  }

  closeDropdown() {
    this.focused = false;
  }

}
