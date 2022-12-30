import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ChartModule } from 'angular-highcharts';

import { HighchartsComponent } from './highcharts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    ChartModule
  ],
  exports: [HighchartsComponent],
  declarations: [HighchartsComponent]
})
export class HighchartsComponentModule { }
