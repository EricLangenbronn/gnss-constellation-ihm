import { NgModule } from '@angular/core';

import { PeriodOfTimeComponentModule } from './component/period-of-time/period-of-time.module';
import { GroundStationComponentModule } from './component/ground-station/ground-station.module';
import { HighchartsComponentModule } from './component/highcharts/highcharts.module';
import { ElevationMaskComponentModule } from './component/elevation-mask/elevation-mask.module';

import { VisibleSatelliteComponent } from './visible-satellite.component';


@NgModule({
  imports: [
    PeriodOfTimeComponentModule,
    GroundStationComponentModule,
    ElevationMaskComponentModule,
    HighchartsComponentModule
  ],
  exports: [VisibleSatelliteComponent],
  declarations: [VisibleSatelliteComponent]
})
export class VisibleSatelliteComponentModule { }
