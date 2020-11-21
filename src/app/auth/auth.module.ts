/*===============> IMPORTS <===============*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/*================ COMPONENTS ================*/

/*================ PIPE ================*/

/*================ MODULES ================*/

const AUTH_COMPONENTS = [

];

@NgModule({
    declarations: [
        ...AUTH_COMPONENTS
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

