import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})

export class DialogueComponent {

  constructor(private injectProductsService : ProductsService) { }
  
  formGroup =new FormGroup({
    // id: new FormControl(""),
    name: new FormControl(""),
    bp: new FormControl(""),
    sp: new FormControl(""),
    serial_no: new FormControl("")
  
  })

  items: any[] = []

  postProduct(form:any) {
    // this.items = this.injectProductsService.postProducts()
    console.log(form.value)
    this.injectProductsService.postProducts(form.value).subscribe
    (productitems => {
      console.log("Product Added", productitems)
      this.items.push(productitems)
    })

  }
  


}
