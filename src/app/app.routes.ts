import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'', component: AppComponent
    },

    {
        path:'login',     component: LoginComponent
        },

    
    {
        path:'signup', component: SignUpComponent
        },

    
    
];
