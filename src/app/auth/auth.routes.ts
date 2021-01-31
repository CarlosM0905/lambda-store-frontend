/*================ IMPORTS ================*/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/*================ COMPONENTS ================*/
import { LoginComponent } from './login/login.component';

/*================ MODULES ================*/

const AUTH_ROUTES: Routes = [
    {
        path: 'login', component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(AUTH_ROUTES),
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule{}
