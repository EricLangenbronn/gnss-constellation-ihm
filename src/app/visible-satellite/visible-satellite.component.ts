import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ElevationMaskComponent } from './component/elevationMask/elevation-mask.component';
import { HighchartsComponent } from './component/highcharts/highcharts.component';
import { LlaComponent } from './component/lla/lla.component';
import { PeriodOfTimeComponent } from './component/period-of-time/period-of-time.component';
import { Satellite } from './repository/dto/satellite/satellite';
import { Parameters } from './repository/dto/request/parameters';
import { SatelliteRepository } from './repository/satellite.repository';


@Component({
  selector: 'visible-satellite',
  templateUrl: './visible-satellite.component.html',
  styleUrls: ['./visible-satellite.component.css'],
  providers: []
})
export class VisibleSatelliteComponent implements AfterViewInit {

  @Output() changedSatellitesVisibles: EventEmitter<Satellite[]> = new EventEmitter<Satellite[]>();

  @ViewChild(ElevationMaskComponent, { static: false }) elevationMaskComponent!: ElevationMaskComponent;
  @ViewChild(PeriodOfTimeComponent, { static: false }) periodOfTimeComponent!: PeriodOfTimeComponent;
  @ViewChild(LlaComponent, { static: false }) LlaComponent!: LlaComponent;
  @ViewChild(HighchartsComponent, { static: false }) highchartsComponent!: HighchartsComponent;
  @ViewChild(MatButton, { static: false }) executeBtn!: MatButton;

  private satelliteRepository: SatelliteRepository;

  public satellitesVisibles: Satellite[] = [];

  constructor(satelliteRepository: SatelliteRepository) {
    this.satelliteRepository = satelliteRepository;
  }

  ngAfterViewInit(): void {

  }

  loadSatelliteData() {

    let parameters = new Parameters();
    parameters.startDateOfMeasure = "1387666800"; // "" + (new Date(Date.UTC(2013, 12, 22, 0, 0, 0, 0))).getTime() / 1000;
    parameters.endDateOfMeasure = "1387753199"; // "" + (new Date(Date.UTC(2013 , 12, 22, 23, 59, 59, 0))).getTime() / 1000;
    parameters.elevationMask = 15.0;
    parameters.altitude = 130.049;
    parameters.latitude = 38.889139;
    parameters.longitude = -77.049;

    this.satelliteRepository.getSateliteVisibleBySatellite(parameters)
      .subscribe(satellitesVisibles => {
        this.satellitesVisibles = satellitesVisibles;
        this.changedSatellitesVisibles.emit(this.satellitesVisibles);
      });
  }
}
