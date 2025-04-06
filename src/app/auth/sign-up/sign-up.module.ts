import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth.module';
import { SignUpComponent } from './sign-up.component';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/cache';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
  ],
  providers:[{
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
      },
  ],
})
export class SignUpModule { }
