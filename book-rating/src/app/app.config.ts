import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, /* withDebugTracing() */),
    provideHttpClient()
  ]
};


// früher:
/*
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
*/
