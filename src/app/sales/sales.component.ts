import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from './sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  id: any;
  sale: any;
  constructor(
    private route: ActivatedRoute,
    private service: SalesService) {
  }
  
 ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getOne()
 }

  getOne() {
    this.service.getOne(this.id).subscribe(sale =>
    {
      this.sale = sale;
      console.log(this.sale)
    })
  }

}
