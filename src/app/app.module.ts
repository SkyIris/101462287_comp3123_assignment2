import {HttpLink} from 'apollo-angular/http';
import {APOLLO_OPTIONS } from 'apollo-angular' 
import { AppComponent } from './app.component';
import { InMemoryCache } from '@apollo/client/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({

    declarations: [],

    imports: [], 

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