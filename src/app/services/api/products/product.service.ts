import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private baseUrl: string= 'https://fakestoreapi.com/'
  constructor() { }
  getAllProductWithlimit(limit:number=5){
    const productsUrl:string = this.baseUrl + 'products?limit' + 5
  }

}
