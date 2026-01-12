import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Calculator } from '../calculator';

@Component({
  selector: 'app-user-working',
  standalone: false,
  templateUrl: './user-working.html',
  styleUrl: './user-working.css',
})
export class UserWorking implements OnInit {
  userarr:any[];
  result:number;
  constructor(private userService: User,private Calc:Calculator) {

  }
  ngOnInit(): void {
    this.userarr = this.userService.getUsers();
  }
  showuser(){
    console.log(this.userService.getUsers());
  }
  numberaddition(a:number,b:number):number{
    this.result=this.Calc.add(a,b);
    return this.result;
  }
  NewUser(){
    const newuser={id:4,name:'David'};
    this.userService.addUser(newuser);
    this.userarr = this.userService.getUsers();
    console.log('New user added:', this.userarr);
  }
}
