import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  constructor(private productsService: ProductsService,
             ) { }

  ngOnInit(): void {
    this.getProducts();
  }



  getProducts(){
    this.productsService.getProducts()
    .then((results: any) => {
      console.log(results);
      if(results.ok){
        this.products = results.products;
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

}
