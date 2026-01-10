import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  standalone: false,
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
})
export class RegisterUser {
  registerForm=new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    mobilenumber: new FormControl('', [Validators.pattern('^[0-9]{10}$')])
  });

  submitData(){
    if(this.registerForm.value.password === this.registerForm.value.confirmPassword){
          console.log(this.registerForm.value);
    } 
  }
}