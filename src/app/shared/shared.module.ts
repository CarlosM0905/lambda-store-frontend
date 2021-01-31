/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

/*================ COMPONENTS ================*/

/*================ PIPES ================*/

/*================ MODULES ================*/

const SHARED_COMPONENTS = [
    HeaderComponent
];

@NgModule({
  declarations: [
      ...SHARED_COMPONENTS,
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
