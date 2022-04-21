import { ProductListService } from './../product-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(

    private mstoreservice: ProductListService

  ) { }

  ngOnInit(){

    this.products = this.mstoreservice.getProduct().subscribe((data) =>{

      this.products = data;
      console.log(data)

    })

  }

}
