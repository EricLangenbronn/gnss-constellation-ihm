import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ElevationMaskComponent, ElevationMask } from './elevation-mask.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [ElevationMaskComponent],
  declarations: [ElevationMaskComponent]
})
export class ElevationMaskComponentModule { }
