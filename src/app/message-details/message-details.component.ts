import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent {
Ondelete() {
  this.delete.emit(this.index)
}
 @Output()
  delete : EventEmitter<number>= new EventEmitter<number>()
  @Input()
  message:any={}
  @Input()
  index:number=-1
}
