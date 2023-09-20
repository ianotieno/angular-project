import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private baseUrl: string= 'https://fakestoreapi.com/'
  constructor(
    private  http: HttpClient
  ) { }
  getAllProductWithlimit(limit:number=5):Observable<any>{
    const productsUrl:string = ` ${this.baseUrl} + 'products?limit=' +${limit}` 
    this.http.get<any>(productsUrl)
  }

}
