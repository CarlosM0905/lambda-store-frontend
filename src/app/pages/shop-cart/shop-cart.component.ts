import { CartService } from './../../services/cart.service';
import { CONSTANTS } from './../../utils/constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  subtotal = 0;
  sendPrice = CONSTANTS.sendPrice;
  discount = 0;
  total = 0;
  cartProducts: Product[] = [];
  constructor(private router: Router, private cartService: CartService) { 
    this.subtotal = cartService.getTotalAmountCart();
    this.total = this.subtotal + this.discount + this.sendPrice;
  }

  ngOnInit(): void {
    this.cartProducts = JSON.parse(localStorage.getItem('cart'))
  }

  goToPay(){
    const isLogged = localStorage.getItem('isUser');
    if(!isLogged){
      this.router.navigateByUrl('/login');
    }
    else{
      this.router.navigateByUrl('/credit-card');
    }
  }
}
