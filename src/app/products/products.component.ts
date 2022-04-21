import { ProductsService } from './../service/products.service';
import { ProductModel } from './../model/ProductModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productModel: ProductModel = new ProductModel();
  listProduct: ProductModel[];


  constructor(

    private productsService: ProductsService

  ) { }

  ngOnInit(){

    window.scroll(0,0)

    this.getAllProducts();

  }

  getAllProducts(){

    this.productsService.getAllProducts().subscribe((resp: ProductModel[]) =>{

      this.listProduct = resp;
      
    })

  }

}
