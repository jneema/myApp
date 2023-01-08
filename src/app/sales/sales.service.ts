import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sales } from './salesinterface';

@Injectable({
  providedIn: 'root'
})

export class SalesService {
 
  constructor(private http:HttpClient) { }
  
  url:string= "http://localhost:8000"

  getSales() {
    return this.http.get(this.url + "/sales/sales" );
  } 

  postSales(salesitems: Sales) {
    return this.http.post(this.url + "/sales/sales", salesitems);
  }

  getOne(id: any) {
    return this.http.get(this.url + "/sales/" + id)
  }
}
