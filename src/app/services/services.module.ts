import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { AuthService } from './auth.service';
import { PaymentService } from './payment.service';
import { ProductsService } from './products.service';

const SERVICES = [
  AuthService,
  ProductsService,
  CartService,
  PaymentService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...SERVICES
  ]
})
export class ServicesModule { }
