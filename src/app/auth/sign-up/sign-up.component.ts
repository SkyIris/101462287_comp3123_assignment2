import { Component, OnInit } from '@angular/core';
import { AuthModule } from "../auth.module";
import { AuthComponent } from "../auth.component";
import {CreateUserGQL} from "../../../generated-types"
import {APOLLO_OPTIONS} from 'apollo-angular';

@Component({
  selector:'app-sign-up',
  imports: [AuthModule, AuthComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  constructor(private readonly createUserGql: CreateUserGQL){}

  ngOnInit():void{}

  signUp({username, password}: any){
    this.createUserGql.mutate({createUserData:{username, password}})
      .subscribe(()=>{});
  } 
}
