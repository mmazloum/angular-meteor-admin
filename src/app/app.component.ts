import { Component } from '@angular/core';
import { SidenavItem } from './core/sidenav/sidenav-item/sidenav-item.interface';
import { SidenavService } from './core/sidenav/sidenav.service';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(sidenavService: SidenavService) {
    const menu: SidenavItem[] = [];

    menu.push({
      name: 'APPS',
      position: 5,
      type: 'subheading',
      customClass: 'first-subheading'
    });

    menu.push({
      name: 'Dashboard',
      routeOrFunction: '/',
      icon: 'dashboard',
      position: 10,
      pathMatchExact: true
    });

    menu.push({
      name: 'Inbox',
      routeOrFunction: '/apps/inbox',
      icon: 'inbox',
      position: 15,
      badge: '22',
      badgeColor: '#673ab7'
    });

    menu.push({
      name: 'Chat',
      routeOrFunction: '/apps/chat',
      icon: 'chat',
      position: 20,
      badge: '14',
      badgeColor: '#009688'
    });

    menu.push({
      name: 'Calendar',
      routeOrFunction: '/apps/calendar',
      icon: 'date_range',
      position: 25
    });

    menu.push({
      name: 'All-In-One Table',
      routeOrFunction: '/tables/all-in-one-table',
      icon: 'assignment',
      position: 30
    });

    menu.push({
      name: 'USER INTERFACE',
      type: 'subheading',
      position: 35
    });

    menu.push({
      name: 'Components',
      routeOrFunction: '/components',
      icon: 'layers',
      position: 40
    });

    const formElements = {
      name: 'Form Elements',
      routeOrFunction: '/forms/form-elements',
      position: 10
    };

    const formWizard = {
      name: 'Form Wizard',
      routeOrFunction: '/forms/form-wizard',
      position: 15
    };

    menu.push({
      name: 'Forms',
      icon: 'description',
      position: 45,
      subItems: [
        formElements,
        formWizard
      ]
    });

    const simpleTable = {
      name: 'Simple Table',
      routeOrFunction: '/tables/simple-table',
      position: 10
    };

    const allInOneTable = {
      name: 'All-In-One Table',
      routeOrFunction: '/tables/all-in-one-table',
      position: 15
    };

    menu.push({
      name: 'Tables',
      icon: 'format_line_spacing',
      position: 50,
      subItems: [
        simpleTable,
        allInOneTable
      ]
    });

    menu.push({
      name: 'Drag & Drop',
      routeOrFunction: '/drag-and-drop',
      icon: 'mouse',
      position: 55
    });

    menu.push({
      name: 'WYSIWYG Editor',
      routeOrFunction: '/editor',
      icon: 'format_shapes',
      position: 60
    });

    menu.push({
      name: 'PAGES',
      type: 'subheading',
      position: 65
    });

    const googleMaps = {
      name: 'Google Maps',
      routeOrFunction: '/maps/google-maps',
      position: 5
    };

    menu.push({
      name: 'Maps',
      icon: 'map',
      position: 70,
      subItems: [
        googleMaps
      ],
      badge: '3',
      badgeColor: '#4CAF50'
    });

    menu.push({
      name: 'Material Icons',
      routeOrFunction: '/icons',
      icon: 'grade',
      position: 75
    });

    const login = {
      name: 'Login Page',
      routeOrFunction: '/login',
      position: 5
    };

    const register = {
      name: 'Register Page',
      routeOrFunction: '/register',
      position: 10
    };

    const forgotPassword = {
      name: 'Forgot Password',
      routeOrFunction: '/forgot-password',
      position: 15
    };

    menu.push({
      name: 'Custom Pages',
      icon: 'web',
      position: 80,
      subItems: [
        login,
        register,
        forgotPassword
      ]
    });

    const level5 = {
      name: 'Level 5',
      routeOrFunction: '/level1/level2/level3/level4/level5'
    };

    const level4 = {
      name: 'Level 4',
      subItems: [level5]
    };

    const level3 = {
      name: 'Level 3',
      subItems: [level4]
    };

    const level2 = {
      name: 'Level 2',
      subItems: [level3]
    };

    const level1 = {
      name: 'Level 1',
      subItems: [level2]
    };

    menu.push({
      name: 'Multi-Level Menu',
      icon: 'menu',
      position: 85,
      subItems: [level1]
    });

    // Send all created Items to SidenavService
    menu.forEach(item => sidenavService.addItem(item));
  }
}
