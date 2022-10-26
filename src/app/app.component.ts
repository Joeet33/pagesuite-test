import { Component } from '@angular/core';
import { InfoListComponent } from 'src/components/info-list/info-list.component';
import { LayoutComponent } from 'src/components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[LayoutComponent, InfoListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-template';
}
