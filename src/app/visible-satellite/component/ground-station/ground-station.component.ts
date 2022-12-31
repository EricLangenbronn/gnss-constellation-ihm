import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

export class GroundStation {

  public longitude: number;
  public latitude: number;
  public altitude: number;

  constructor(longitude: number, latitude: number, altitude: number) {
    if (longitude && latitude && altitude) {
      this.longitude = longitude;
      this.latitude = latitude;
      this.altitude = altitude;
    } else {
      this.longitude = 7.74553;
      this.latitude = 48.58392;
      this.altitude = 147.000;
    }
  }

  public getLongitude(): number {
    return this.longitude;
  }

  public getLatitude(): number {
    return this.latitude;
  }

  public getAltitude(): number {
    return this.altitude;
  }

}

@Component({
  selector: 'lla',
  templateUrl: './ground-station.component.html',
  styleUrls: ['./ground-station.component.css'],
  providers: []
})
export class GroundStationComponent implements OnInit {

  @Input() groundStation: GroundStation = new GroundStation(7.74553, 48.58392, 147.000);
  @Output() eventUpdategroundStation: EventEmitter<GroundStation> = new EventEmitter<GroundStation>();

  @ViewChild('longitudeInput', { read: ElementRef }) longitudeInput!: ElementRef<HTMLInputElement>;
  @ViewChild('latitudeInput', { read: ElementRef }) latitudeInput!: ElementRef<HTMLInputElement>;
  @ViewChild('altitudeInput', { read: ElementRef }) altitudeInput!: ElementRef<HTMLInputElement>;

  constructor() {
  }

  ngOnInit() {
    // do something
  }

  public getGroundStation(): GroundStation {
    return this.groundStation;
  }
}
