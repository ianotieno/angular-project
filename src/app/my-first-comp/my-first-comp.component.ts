import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent {
deleteMessage(index: number):void{
this.messages.splice(index,1);
}
name:string =""
email:string=""
message:string=""
isSubmited:boolean= false
messages:Array<any>=[]
OnSubmit(){
  this.isSubmited=true
  this.messages.push({
    'name':this.name,
    'email':this.email,
    'message':this.message
  })
  
}
constructor(private service:MyFirstService){
  this.messages= this.service.getAllMessages()
  this.isSubmited=this.messages.length > 0 
}
}
