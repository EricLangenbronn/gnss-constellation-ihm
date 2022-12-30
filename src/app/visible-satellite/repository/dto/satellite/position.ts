export class Position {

  private radialDistance: number;
  private polarAngle: number;
  private azimuthalAngle: number;

  constructor(radialDistance: number, polarAngle: number, azimuthalAngle: number) {
    this.radialDistance = radialDistance;
    this.polarAngle = polarAngle;
    this.azimuthalAngle = azimuthalAngle;
  }

  public getRadialDistance(): number {
    return this.radialDistance;
  }

  public getPolarAngle(): number {
    return this.polarAngle;
  }

  public getAzimuthalAngle(): number {
    return this.azimuthalAngle;
  }
}
