import { CartService } from './../../services/cart.service';
import { Product } from './../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product: Product;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

}
