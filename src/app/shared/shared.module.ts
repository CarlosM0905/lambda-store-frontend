/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/*================ COMPONENTS ================*/

/*================ PIPES ================*/

/*================ MODULES ================*/

const SHARED_COMPONENTS = [];

@NgModule({
  declarations: [
      ...SHARED_COMPONENTS
  ],
  exports: [
      ...SHARED_COMPONENTS
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
    ],
})
export class SharedModule {}
