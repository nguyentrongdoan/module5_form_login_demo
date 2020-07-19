import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  userInfor = {
    username: '',
    email: '',
    password: '',
    rememberMe: false
  }
  usernamePattern = /^[a-z]{6,32}$/i;
  emailPattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit1(form: NgForm) {
    console.log(form);
  }
  onSubmit2(form: NgForm) {
    console.log(form);
  }

}
