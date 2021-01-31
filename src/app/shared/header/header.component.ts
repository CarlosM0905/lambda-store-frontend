import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  counterCart: number = 0;
  constructor(private cartService: CartService) {
    this.counterCart = JSON.parse(localStorage.getItem('cart')).length;
   }

  ngOnInit(): void {
    this.subscription = this.cartService.getCountProductsCart().subscribe(counter => {
      this.counterCart = counter;
    });
  }

}
