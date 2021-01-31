/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/*================ COMPONENTS ================*/
import { HomeComponent } from './home/home.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

/*================ PIPES ================*/

/*================ MODULES ================*/
import { ComponentsModule } from './../components/components.module';
import { SharedModule } from './../shared/shared.module';

const PAGES_COMPONENTS = [
    HomeComponent,
    ShopCartComponent,
    CreditCardComponent,
];

@NgModule({
  declarations: [
      ...PAGES_COMPONENTS,
      
  ],
  exports: [
      ...PAGES_COMPONENTS
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule,
      SharedModule,
      ComponentsModule  
    ],
})
export class PagesModule {}
