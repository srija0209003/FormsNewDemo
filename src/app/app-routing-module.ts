import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTemplate } from './login-template/login-template';
import { LoginFormReactive } from './login-form-reactive/login-form-reactive';
import { RegisterUser } from './register-user/register-user';
import { RegisterStudent } from './register-student/register-student';

const routes: Routes = [
  {path:"Login", component: LoginTemplate},
  {path:"LoginValidation",component: LoginFormReactive},
  {path:"RegisterUser",component: RegisterUser},
  {path:"RegisterStudent",component: RegisterStudent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
