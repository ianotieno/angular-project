import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent {
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
}
