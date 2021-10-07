import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimengImportsModule } from './modules';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
   imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengImportsModule,
    RouterModule,
  ],
  exports: [
    PrimengImportsModule,
],
  entryComponents: []
})
export class SharedModule { }
