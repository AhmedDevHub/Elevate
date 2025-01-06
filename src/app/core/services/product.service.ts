import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  private apiUrl = 'https://fakestoreapi.com/products'; // API URL for fetching multiple products

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); // Ensure the response is an array of products
  }
  getProductById(id:any): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
