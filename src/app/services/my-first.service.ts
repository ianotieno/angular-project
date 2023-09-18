import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {
 messages:Array<any>=[]

 constructor() {
  this.init()
 }

 init(){
  this.insert({
    name: 'ian',
    email:'ianotieno@',
    message:'hello'
  });
  this.insert({
    name: 'john',
    email:'ianotieno@',
    message:'hello-john'
  });
  this.insert({
    name: 'paul',
    email:'ianotieno@',
    message:'hello-paul'
  });
 }
  
  insert(message:{name:string,email:string,message:string}){
    this.messages.push(message)
  }
  getAllMessages(){
    return this.messages
  }
  deleteMessage(index:number){
    this.messages.slice(index,1)
  }
}
