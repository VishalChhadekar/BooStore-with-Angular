import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/Types/RegisterForm';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  register: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  passwordMatch: boolean = true;
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }

  registerSubmit() {
    this.authService.register(this.register);
  }

  isLoading(){
    return this.authService.isLoading;
  }
}
