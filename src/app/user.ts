import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  users=[
    {id:1, name:'Alice'},
    {id:2, name:'Bob'},
    {id:3, name:'Charlie'}
  ];

  getUsers(){
    return this.users;
  }

  getUserById(id: number){
    return this.users.find(user => user.id === id);
  }

  addUser(user:any){
    this.users.push(user);
  }
}
