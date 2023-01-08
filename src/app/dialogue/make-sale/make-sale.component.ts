import { Component } from '@angular/core';
import { SalesService } from 'src/app/sales/sales.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-make-sale',
  templateUrl: './make-sale.component.html',
  styleUrls: ['./make-sale.component.css']
})

export class MakeSaleComponent {

  constructor(private injectSalesService : SalesService, private route: ActivatedRoute, private router: Router) { }

  formGroup = new FormGroup({
    product_id: new FormControl(""),
    quantity:  new FormControl("")
  })
  products: any[] = []
  addsale: any

  postSale(form: any){
    console.log(form.value)
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.addsale = form.value
    this.injectSalesService.postSales(this.addsale).subscribe
    (salesitems  =>
     {
      console.log("Sale Added", salesitems)
      // this.sales.push(salesitems)
    })

  }
}

