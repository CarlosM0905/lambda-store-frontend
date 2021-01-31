import { PagesRoutingModule } from './pages/pages.routes';
import { AuthRoutingModule } from './auth/auth.routes';
/*================ IMPORTS ================*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/*================ COMPONENTS ================*/


/*================ MODULES ================*/

const APP_ROUTES: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES),
        AuthRoutingModule,
        PagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}
