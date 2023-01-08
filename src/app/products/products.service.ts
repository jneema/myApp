import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Products } from './products-model';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http:HttpClient) { }

  url:string= "http://localhost:8000/products/"

  getProducts() {
    return this.http.get(this.url + "products" );

  } 
  postProducts(productitem: Products) {
    return this.http.post(this.url + "products", productitem);

  }

  getProduct(id: any) {
    return this.http.get(this.url + id)
  }

  putProduct(productitem: Products) {
    const headers = new HttpHeaders().append('header', 'value');

    return this.http.put(this.url + "products", productitem, { headers })
  }

  deleteProduct(id: any) {
    return this.http.delete(this.url + id)
  }
  
}
