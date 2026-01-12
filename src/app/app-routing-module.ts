import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTemplate } from './login-template/login-template';
import { LoginFormReactive } from './login-form-reactive/login-form-reactive';
import { RegisterUser } from './register-user/register-user';
import { RegisterStudent } from './register-student/register-student';
import { UserWorking } from './user-working/user-working';

const routes: Routes = [
  {path:"Login", component: LoginTemplate},
  {path:"LoginValidation",component: LoginFormReactive},
  {path:"RegisterUser",component: RegisterUser},
  {path:"RegisterStudent",component: RegisterStudent},
  {path:"UserRegistration",component:UserWorking}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
