import { MainSidenavComponent } from './main-sidenav/main-sidenav.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { FrameComponent } from './../shared/frame/frame/frame.component';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateIfLogged } from '../services/guards/can-activate-if-logged.guard';
import { CanActivateIfUser } from '../services/guards/can-activate-if-user.guard';
import { CanDeactivateGuard } from '../services/guards/can-deactivate.guard';
import { MainCenterComponent } from './main-center/main-center.component';
import { ModuleWithProviders } from '@angular/core';

export const mainRoutes: Routes = [
  {

    path: '', component: FrameComponent,
    canActivate: [CanActivateIfLogged, CanActivateIfUser],
    children: [
      { path: '', component: UserinfoComponent, outlet: 'userinfo' },
      { path: '', component: MainSidenavComponent, outlet: 'sidenav' },
      {
        path: '', children: [
          { path: '' },
          {
            path: ':viewid', children: [
              { path: '' },
              { path: 'documents', loadChildren: 'app/main/pages/documents/documents.module#DocumentsModule' },
              { path: 'events', loadChildren: 'app/main/pages/events/events.module#EventsModule' },
              { path: 'lists', loadChildren: 'app/main/pages/dossiers/dossiers.module#DossiersModule' },
              { path: 'notes', loadChildren: 'app/main/pages/notes/notes.module#NotesModule' },
              { path: 'resources', loadChildren: 'app/main/pages/resources/resources.module#ResourcesModule' },
              { path: 'objectives', loadChildren: 'app/main/pages/objectives/objectives.module#ObjectivesModule' }
            ]
          }
        ]
      }
    ]
  }
];

export const mainRouting = RouterModule.forChild(mainRoutes);
