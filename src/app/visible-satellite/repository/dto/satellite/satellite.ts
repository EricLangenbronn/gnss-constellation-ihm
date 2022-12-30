import { Position } from './position';

export class Satellite {

  private satelliteId: string;
  private positionsByTime: Map<Date, Position>;

  constructor(satelliteId: string, positionsByTime: any) {
    this.satelliteId = satelliteId;
    this.positionsByTime = new Map<Date, Position>();

    let keys: string[] = Object.keys(positionsByTime);

    for (let key in keys) {
      const value = Object(positionsByTime)[keys[key]];

      this.positionsByTime.set(new Date(keys[key]), new Position(Number.parseFloat(value["radialDistance"]), Number.parseFloat(value["polarAngle"]), Number.parseFloat(value["azimuthalAngle"])));
    }
  }


  public getSatelliteId(): string {
    return this.satelliteId;
  }

  public getPositionsByTime(): Map<Date, Position> {
    return this.positionsByTime;
  }
}
