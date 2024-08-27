import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/components/header/header.component';
import { NavComponent } from './app/components/nav/nav.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AboutUsComponent } from './app/components/about-us/about-us.component';
import { CadastrousuarioComponent } from './app/components/cadastrousuario/cadastrousuario.component';




bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // Adicionando o provedor HttpClient
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
//chatgpt



bootstrapApplication(HeaderComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(NavComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // Adicionando o provedor HttpClient
    ...appConfig.providers
  ]
}).catch(err => console.error(err));
//chatgpt


bootstrapApplication(AboutUsComponent, appConfig)
  .catch((err) => console.error(err));




bootstrapApplication(CadastrousuarioComponent, appConfig)
  .catch((err) => console.error(err));



