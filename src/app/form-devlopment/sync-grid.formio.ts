import { Injector } from '@angular/core';
import { FormioCustomComponentInfo } from './custom-lib/elements.common';
import { registerCustomFormioComponent } from './custom-lib/register-custom-component';
import { CustomComponentsSyncGridComponent } from '@myngapp/custom-components/sync-grid';
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
