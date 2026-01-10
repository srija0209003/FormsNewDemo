import { Component } from '@angular/core';

@Component({
  selector: 'app-login-template',
  standalone: false,
  templateUrl: './login-template.html',
  styleUrl: './login-template.css',
})
export class LoginTemplate {
  submitData(f:any){
    console.log(f.value);
  }
}
