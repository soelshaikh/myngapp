import { Component, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    import('@myngapp/custom-components/sync-grid');
  }
}
