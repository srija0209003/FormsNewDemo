import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginTemplate } from './login-template/login-template';
import { LoginFormReactive } from './login-form-reactive/login-form-reactive';
import { RouterModule } from '@angular/router';
import { RegisterUser } from './register-user/register-user';
import { RegisterStudent } from './register-student/register-student';
import { UserWorking } from './user-working/user-working';
import { DeptWorking } from './dept-working/dept-working';


@NgModule({
  declarations: [
    App,
    LoginTemplate,
    LoginFormReactive,
    RegisterUser,
    RegisterStudent,
    UserWorking,
    DeptWorking
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //template driven forms
    ReactiveFormsModule,
    RouterModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [DeptWorking]
})
export class AppModule { }
