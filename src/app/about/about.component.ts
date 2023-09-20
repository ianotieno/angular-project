import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { observeOn } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{

constructor(
  private service: ProductService
){

}
ngOnInit(): void {
  this.service.getAllProductWithlimit()
  .subscribe({next:(data: void) =>{
    
  }

  })
}
}
