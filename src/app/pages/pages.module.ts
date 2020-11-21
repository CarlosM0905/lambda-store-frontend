/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/*================ COMPONENTS ================*/

/*================ PIPES ================*/

/*================ MODULES ================*/

const PAGES_COMPONENTS = [];

@NgModule({
  declarations: [
      ...PAGES_COMPONENTS
  ],
  exports: [
      ...PAGES_COMPONENTS
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
    ],
})
export class PagesModule {}
