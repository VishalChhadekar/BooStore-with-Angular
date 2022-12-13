import { Component, OnInit } from '@angular/core';
import { InputForm } from 'src/app/Types/LoginForm';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: InputForm = {
    email: '',
    password: ''

  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.loginForm);
  }
  isLoading() {
    return this.authService.isLoading;
  }

}
