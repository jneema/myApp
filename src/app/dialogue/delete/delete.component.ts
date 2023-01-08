import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/products/products.service';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Products } from 'src/app/products/products-model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  constructor (private service:ProductsService,  public dclose:MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.formGroup.setValue({
        id: this.data[0],
        name: this.data[1],
        bp: this.data[2],
        sp: this.data[3],
        serial_no: this.data[4]
      })
    }

    formGroup =new FormGroup({
      id: new FormControl(""),
      name: new FormControl(""),
      bp: new FormControl(""),
      sp: new FormControl(""),
      serial_no: new FormControl("")
    
    })

    deleteitem(){
      this.service.deleteProduct(this.data[0])
      .subscribe
      (productitem =>{
        console.log("Details", productitem)
      })
    }
}
