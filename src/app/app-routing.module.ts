import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/demo/custom-pages/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: 'app/demo/custom-pages/register/register.module#RegisterModule',
  },
  {
    path: 'forgot-password',
    loadChildren: 'app/demo/custom-pages/forgot-password/forgot-password.module#ForgotPasswordModule',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/demo/dashboard/dashboard.module#DashboardModule',
        pathMatch: 'full'
      },
      {
        path: 'apps/inbox',
        loadChildren: 'app/demo/apps/inbox/inbox.module#InboxModule',
      },
      {
        path: 'apps/calendar',
        loadChildren: 'app/demo/apps/calendar/calendar.module#CalendarAppModule',
      },
      {
        path: 'apps/chat',
        loadChildren: 'app/demo/apps/chat/chat.module#ChatModule',
      },
      {
        path: 'components',
        loadChildren: 'app/demo/components/components.module#ComponentsModule',
      },
      {
        path: 'forms/form-elements',
        loadChildren: 'app/demo/forms/form-elements/form-elements.module#FormElementsModule',
      },
      {
        path: 'forms/form-wizard',
        loadChildren: 'app/demo/forms/form-wizard/form-wizard.module#FormWizardModule',
      },
      {
        path: 'icons',
        loadChildren: 'app/demo/icons/icons.module#IconsModule',
      },
      {
        path: 'level1/level2/level3/level4/level5',
        loadChildren: 'app/demo/level5/level5.module#Level5Module',
      },
      {
        path: 'maps/google-maps',
        loadChildren: 'app/demo/maps/google-maps/google-maps.module#GoogleMapsModule',
      },
      {
        path: 'tables/simple-table',
        loadChildren: 'app/demo/tables/simple-table/simple-table.module#SimpleTableModule',
      },
      {
        path: 'tables/all-in-one-table',
        loadChildren: 'app/demo/tables/all-in-one-table/all-in-one-table.module#AllInOneTableModule',
      },
      {
        path: 'drag-and-drop',
        loadChildren: 'app/demo/drag-and-drop/drag-and-drop.module#DragAndDropModule'
      },
      {
        path: 'editor',
        loadChildren: 'app/demo/editor/editor.module#EditorModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
