import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-form-reactive',
  standalone: false,
  templateUrl: './login-form-reactive.html',
  styleUrl: './login-form-reactive.css',
})
export class LoginFormReactive {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  submitData() {
    console.log(this.loginForm.value);
  }
}
