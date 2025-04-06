import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/cache';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient(), {
          provide:APOLLO_OPTIONS,
          useFactory:(httpLink: HttpLink) =>{
              return{
                  cache: new InMemoryCache(),
                  link: httpLink.create({
                      uri:'api/graphql'
                  }),
              };
          },
          deps:[HttpLink],
      }, ]
};

