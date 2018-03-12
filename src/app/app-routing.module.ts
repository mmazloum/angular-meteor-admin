import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './core/admin/admin.component';
import { ForgotPasswordComponent } from './demo/custom-pages/forgot-password/forgot-password.component';
import { LoginComponent } from './demo/custom-pages/login/login.component';
import { RegisterComponent } from './demo/custom-pages/register/register.component';
import { DashboardComponent } from './demo/dashboard/dashboard.component';
import { DragAndDropComponent } from './demo/drag-and-drop/drag-and-drop.component';
import { EditorComponent } from './demo/editor/editor.component';
import { FormElementsComponent } from './demo/forms/form-elements/form-elements.component';
import { FormWizardComponent } from './demo/forms/form-wizard/form-wizard.component';
import { IconsComponent } from './demo/icons/icons.component';
import { Level5Component } from './demo/levels/level5/level5.component';
import { GoogleMapsComponent } from './demo/maps/google-maps/google-maps.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: '',
    component: AdminComponent,

    children: [
      {
        path: '',
        component: DashboardComponent,
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
        component: FormElementsComponent
      },
      {
        path: 'forms/form-wizard',
        component: FormWizardComponent
      },
      {
        path: 'icons',
        component: IconsComponent
      },
      {
        path: 'level1/level2/level3/level4/level5',
        component: Level5Component
      },
      {
        path: 'maps/google-maps',
        component: GoogleMapsComponent
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
        component: DragAndDropComponent
      },
      {
        path: 'editor',
        component: EditorComponent
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
