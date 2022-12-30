import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { LlaComponent } from './lla.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatRadioModule
  ],
  exports: [LlaComponent],
  declarations: [LlaComponent]
})
export class LlaComponentModule { }
