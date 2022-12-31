import { ObservationPeriod } from '../../../component/period-of-time/period-of-time.component';
import { ElevationMask } from '../../../component/elevation-mask/elevation-mask.component';
import { GroundStation } from '../../../component/ground-station/ground-station.component';

export class VisibleSatelliteRequest {

  private observationPeriod: ObservationPeriod;
  private groundStation: GroundStation
  private elevationMask: ElevationMask


  constructor(observationPeriod: ObservationPeriod, groundStation: GroundStation, elevationMask: ElevationMask) {
    this.observationPeriod = observationPeriod;
    this.groundStation = groundStation;
    this.elevationMask = elevationMask
  }

  public getStartDateOfMeasure(): number {
    return this.observationPeriod.getStartDate().getTime() / 1000;
  }

  public getEndDateOfMeasure(): number {
    return this.observationPeriod.getEndDate().getTime() / 1000;
  }

  public getLongitude(): number {
    return this.groundStation.getLongitude();
  }

  public getLatitude(): number {
    return this.groundStation.getLatitude();
  }

  public getAltitude(): number {
    return this.groundStation.getAltitude();
  }

  public getElevationMask(): number {
    return this.elevationMask.getElevationMask();
  }

}
