/*===============> IMPORTS <===============*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/*================ COMPONENTS ================*/
import { LoginComponent } from './login/login.component';

/*================ PIPE ================*/

/*================ MODULES ================*/

const AUTH_COMPONENTS = [
    LoginComponent
];

@NgModule({
    declarations: [
        ...AUTH_COMPONENTS,
    ],
    exports: [
        ...AUTH_COMPONENTS
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule
      ],
  })
export class AuthModule{}

