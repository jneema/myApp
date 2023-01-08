import { Component } from '@angular/core';
import { SalesService } from '../sales/sales.service'

@Component({
  selector: 'app-general-sales',
  templateUrl: './general-sales.component.html',
  styleUrls: ['./general-sales.component.css']
})
export class GeneralSalesComponent {
  sales: any[]= []

  constructor(private service: SalesService) {
    this.get()
  }
  get () {
    console.log(this.sales)
    this.service.getSales().subscribe(
      (data: any)=> {this.sales=data
        console.log("Product items", data)
      }
    );
  }
}
