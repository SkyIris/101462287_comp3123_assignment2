import { NgModule } from '@angular/core';
import {HttpLink} from 'apollo-angular/http';
import {APOLLO_OPTIONS} from 'apollo-angular';
import { AppComponent } from './app/app.component';
import { InMemoryCache } from '@apollo/client/core';

@NgModule({
    declarations:[],
    imports:[],
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
    bootstrap:[],
})

export class AppModule{}