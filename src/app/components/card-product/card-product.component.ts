import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product: Product;
  constructor(
    private cartService: CartService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  buyProduct(){
    localStorage.setItem('productSelected', JSON.stringify(this.product));
    const isLogged = JSON.parse(localStorage.getItem('isUser'));
    if(isLogged){
      this.router.navigateByUrl('/credit-card');
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }

}
