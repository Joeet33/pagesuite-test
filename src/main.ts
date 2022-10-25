import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './routes/app.component';
import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';
import { routes } from './routes/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, { providers: provideRouter(routes) }).catch(
  (err) => console.error(err)
);
