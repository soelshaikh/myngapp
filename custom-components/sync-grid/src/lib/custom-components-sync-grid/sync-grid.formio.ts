import { Injector } from '@angular/core';
import { FormioCustomComponentInfo } from '../custom-lib/elements.common';
import { CustomComponentsSyncGridComponent } from './custom-components-sync-grid.component';
import { registerCustomFormioComponent } from '../custom-lib/register-custom-component';

const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'syncgrid',
  selector: 'sync-grid',
  title: 'Sync Grid',
  group: 'custom',
  icon: 'table',
};
export function RegisterCustomSyncGridComponent(injector: Injector) {
  registerCustomFormioComponent(
    COMPONENT_OPTIONS,
    CustomComponentsSyncGridComponent,
    injector
  );
}
