import { CreditCardComponent } from './credit-card/credit-card.component';
/*================ IMPORTS ================*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/*================ COMPONENTS ================*/
import { HomeComponent } from './home/home.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

/*================ MODULES ================*/

const PAGES_ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'cart', component: ShopCartComponent
    },
    {
        path: 'credit-card', component: CreditCardComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES),
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule{}
