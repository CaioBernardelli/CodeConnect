import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { NavComponent } from './app/nav/nav.component';
import { FooterComponent } from './app/footer/footer.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { CardFilmComponent } from './app/card-film/card-film.component';
//import { ListFilmsComponent } from './app/list-films/list-films.component';
//import { HomeComponent } from './app/home/home.component';J
//import { SelectButtonComponent } from './app/select-button/select-button.component';


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

/*
  bootstrapApplication(ListFilmsComponent, {
    providers: [
      provideRouter(routes),
    provideHttpClient(), // Adicionando o provedor HttpClient
      ...appConfig.providers
    ]
  }).catch(err => console.error(err));
  //chatgpt

  bootstrapApplication(FooterComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(CardFilmComponent, {
    providers: [provideHttpClient()]
  }).catch(err => console.error(err));


  
  bootstrapApplication(HomeComponent, {
    providers: [
      provideRouter(routes),
      provideHttpClient(), // Adicionando o provedor HttpClient
      ...appConfig.providers
    ]
  }).catch(err => console.error(err));
  //chatgpt


  bootstrapApplication(SelectButtonComponent, appConfig)
  .catch((err) => console.error(err));

  */