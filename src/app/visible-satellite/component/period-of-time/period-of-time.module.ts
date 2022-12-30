import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { PeriodOfTimeComponent } from './period-of-time.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [PeriodOfTimeComponent],
  declarations: [PeriodOfTimeComponent]
})
export class PeriodOfTimeComponentModule { }
