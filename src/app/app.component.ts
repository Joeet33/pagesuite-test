import { Component } from '@angular/core';
import { LayoutComponent } from 'src/components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[LayoutComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-template';
}
