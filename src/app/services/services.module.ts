import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { AuthService } from './auth.service';
import { ProductsService } from './products.service';

const SERVICES = [
  AuthService,
  ProductsService,
  CartService
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
