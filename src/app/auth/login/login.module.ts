import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../auth.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, AuthModule, LoginComponent
  ]
})
export class LoginModule { }
