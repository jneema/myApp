import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/products/products.service';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {

  constructor (private service:ProductsService,  public dclose:MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.formGroup.setValue({
        id: this.data[0],
        name: this.data[1],
        bp: this.data[2],
        sp: this.data[3],
        serial_no: this.data[4]
      })
    }
 


  updateDetails( form: any) {
    console.log(form.value)
    this.service.putProduct(form.value).subscribe
    (productitem =>{
      console.log("Details", productitem)
    })
  
  }

    
  formGroup =new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    bp: new FormControl(""),
    sp: new FormControl(""),
    serial_no: new FormControl("")
  
  })


  ngOnInit(): void {  }

}
