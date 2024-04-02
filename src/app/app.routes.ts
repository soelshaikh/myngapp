import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BuilderComponent } from './form-devlopment/builder/builder/builder.component';
import { RendererComponent } from './form-devlopment/renderer/renderer/renderer.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'builder',
    component: BuilderComponent,
  },
  {
    path: 'renderer',
    component: RendererComponent,
  },
  {
    path: 'sync-grid',
    loadComponent: () =>
      import('@myngapp/custom-components/sync-grid').then(
        (m) => m.CustomComponentsSyncGridComponent
      ),
  },
  {
    path: 'datasource',
    loadComponent: () =>
      import('@myngapp/custom-components/datasource').then(
        (m) => m.CustomComponentsDatasourceComponent
      ),
  },
];
