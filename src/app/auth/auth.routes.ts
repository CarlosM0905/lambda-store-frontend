/*================ IMPORTS ================*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/*================ COMPONENTS ================*/

/*================ MODULES ================*/

const AUTH_ROUTES: Routes = [
    {
        path: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(AUTH_ROUTES),
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule{}
