import { NotificationFactory } from './../classes/notificationFactory.class';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private subject = new Subject<any>();
  private notificationFactory: NotificationFactory = new NotificationFactory();
  constructor() { }

  createCart(){
    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  addToCart(product: Product){
    const cart: Product[] = JSON.parse(localStorage.getItem('cart'));
    console.log('PRODUCTO SELECCIONADO:', product);

    const result = cart.filter((cartProduct: Product) => {
      return cartProduct.idProducto === product.idProducto;
    });

    console.log('RESULTADO DE BUSQUEDA: ', result);
    if(result.length === 0){
      product.Cantidad = 1;
      cart.push(product);
    }
    else{
      const index = cart.indexOf(result[0]);
      console.log('INDICE:', index)
      cart[index].Cantidad++;
    }
    this.notificationFactory.getNotification('Se agregó el producto al carrito', 'info');
    localStorage.setItem('cart', JSON.stringify(cart));
    this.subject.next(this.countProductsCart());


  }

  countProductsCart(){
    let total = 0;
    const cart: Product[] = JSON.parse(localStorage.getItem('cart'));
    cart.forEach((product: Product) => {
      total += product.Cantidad;
    });
    return total;
  }

  deleteToCart(){

  }

  getCountProductsCart(){
    return this.subject.asObservable();
  }

  getTotalAmountCart(){
    let total = 0;
    const cart: Product[] = JSON.parse(localStorage.getItem('cart'));
    cart.forEach((product: Product) => {
      total += product.Cantidad*product.Precio;
    });
    return total;
  }

  getTotalAmountProduct(){
    let total = 0;
    const productSelected: Product = JSON.parse(localStorage.getItem('productSelected'));
    total = productSelected.Precio;
    return total;
  }
}
