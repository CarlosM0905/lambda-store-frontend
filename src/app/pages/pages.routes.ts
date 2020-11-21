/*================ IMPORTS ================*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/*================ COMPONENTS ================*/

/*================ MODULES ================*/

const PAGES_ROUTES: Routes = [
    {
        path: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(PAGES_ROUTES),
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule{}
