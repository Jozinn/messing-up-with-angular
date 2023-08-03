import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

   getProducts(query: string) : Observable<Product[]> {
    return this.http.get<Product[]>('/api/product', {
      params: {q: query}
    });
   }

   createProduct(product: Product) : Observable<any> {
    return this.http.post('/api/product', product);
   }

   chnangeInQuantity(id: number, changeInQuantity: number) : Observable<any> {
    return this.http.patch(`/api/product/${id}`, {changeInQuantity: changeInQuantity});
   }
}


