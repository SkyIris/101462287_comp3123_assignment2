import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-auth',
  imports: [MatFormFieldModule, NgIf, ReactiveFormsModule, MatInputModule, MatIconModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  @Output() onSubmitEvent = new EventEmitter<any>
  @Input() submitLabel: string;

  username = new FormControl('',[Validators.required]);
  password = new FormControl('', [Validators.required])

  usernameError(){
    if(this.username.hasError('required'))
    {
      return "You must enter a user name."
    }
    return "username error"
  }

  passwordError(){
    if(this.password.hasError('required'))
    {
      return "You must enter a password"
    }
    return "password error"
  }

  onSubmit(){
    this.onSubmitEvent.emit({
      username: this.username.value,
      password:this.password.value
    })
  }

}
