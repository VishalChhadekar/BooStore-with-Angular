import { Injectable } from '@angular/core';
import { InputForm } from '../Types/LoginForm';
import { RegisterForm } from '../Types/RegisterForm';
import { getAuth, createUserWithEmailAndPassword, signOut , signInWithEmailAndPassword} from "firebase/auth";
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatch: boolean = true;

  constructor(private router: Router) { }

  login(form: InputForm) {
    if (this.isLoading == true) { return }
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        console.log(userCredential);
        console.log("Login successful!");
        this.isAuthenticated = true;
        //when Authenticaton is successful: navigate to base URL
        this.router.navigate(['']);
        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally(() => this.isLoading = false);
  }


  register(form: RegisterForm) {
    if (this.isLoading == true) { return }
    //if this is in working state; even if user is clicking do nothing further.
    this.isLoading = true;
    if (form.email === form.confirmPassword) {
      this.passwordMatch = false;
      console.log("Password does not matched.")
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isAuthenticated = true;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert("Error");
        // ..
      }).finally(() => this.isLoading = false);
  }

  logOut() {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }

}
