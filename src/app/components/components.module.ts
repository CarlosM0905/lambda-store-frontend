/*===============> IMPORTS <===============*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/*================ COMPONENTS ================*/
import { CardProductComponent } from './card-product/card-product.component';

/*================ PIPE ================*/

/*================ MODULES ================*/

const COMPONENTS = [
    CardProductComponent
];

@NgModule({
    declarations: [
        ...COMPONENTS,
    ],
    exports: [
        ...COMPONENTS
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule
      ],
  })
export class ComponentsModule{}

