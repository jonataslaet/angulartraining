import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 2000
    })
  }

  readAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL);
  }

  readById(id: string): Observable<Product> {
    const prodIdUrl = `${this.baseURL}/${id}`;
    return this.httpClient.get<Product>(prodIdUrl);
  }

  update(prod: Product): Observable<Product> {
    const prodIdUrl = `${this.baseURL}/${prod.id}`;
    return this.httpClient.put<Product>(prodIdUrl, prod);
  }

  delete(id: string): Observable<Product>{
    const prodIdUrl = `${this.baseURL}/${id}`;
    return this.httpClient.delete<Product>(prodIdUrl);
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseURL, product);
  }
}
