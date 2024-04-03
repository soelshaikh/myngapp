import { Component, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterCustomSyncGridComponent } from './form-devlopment/sync-grid.formio';
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myngapp';
  constructor(injector: Injector) {
    RegisterCustomSyncGridComponent(injector);
  }
}
