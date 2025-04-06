import { Component } from '@angular/core';
import { AuthModule } from "../auth.module";
import { AuthComponent } from "../auth.component";

@Component({
  selector:'app-login',
  imports: [AuthModule, AuthComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login({username, password}: any){
    console.log(username, password);
  }

}
