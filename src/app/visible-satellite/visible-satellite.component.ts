import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ElevationMaskComponent } from './component/elevation-mask/elevation-mask.component';
import { HighchartsComponent } from './component/highcharts/highcharts.component';
import { GroundStationComponent } from './component/ground-station/ground-station.component';
import { PeriodOfTimeComponent } from './component/period-of-time/period-of-time.component';
import { Satellite } from './repository/dto/satellite/satellite';
import { VisibleSatelliteRequest } from './repository/dto/request/visible-satellite-request';
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
  @ViewChild(GroundStationComponent, { static: false }) groundStationComponent!: GroundStationComponent;
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

    let parameters = new VisibleSatelliteRequest(this.periodOfTimeComponent.getObservationPeriod(), this.groundStationComponent.getGroundStation(), this.elevationMaskComponent.getElevationMask());

    this.satelliteRepository.getSateliteVisibleBySatellite(parameters)
      .subscribe(satellitesVisibles => {
        this.satellitesVisibles = satellitesVisibles;
        this.changedSatellitesVisibles.emit(this.satellitesVisibles);
      });
  }
}
