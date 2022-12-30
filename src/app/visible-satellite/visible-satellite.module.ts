import { NgModule } from '@angular/core';

import { PeriodOfTimeComponentModule } from './component/period-of-time/period-of-time.module';
import { LlaComponentModule } from './component/lla/lla.module';
import { HighchartsComponentModule } from './component/highcharts/highcharts.module';
import { ElevationMaskComponentModule } from './component/elevationMask/elevation-mask.module';

import { VisibleSatelliteComponent } from './visible-satellite.component';


@NgModule({
  imports: [
    PeriodOfTimeComponentModule,
    LlaComponentModule,
    ElevationMaskComponentModule,
    HighchartsComponentModule
  ],
  exports: [VisibleSatelliteComponent],
  declarations: [VisibleSatelliteComponent]
})
export class VisibleSatelliteComponentModule { }
