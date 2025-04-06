import { Component } from '@angular/core';
import { AuthModule } from "../auth.module";
import { AuthComponent } from "../auth.component";

@Component({
  selector:'app-sign-up',
  imports: [AuthModule, AuthComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signUp({username, password}: any)
    {console.log(username, password);
  } 
}
