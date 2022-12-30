import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lla',
  templateUrl: './lla.component.html',
  styleUrls: ['./lla.component.css'],
  providers: []
})
export class LlaComponent implements OnInit {

  public longitude: number;
  public latitude: number;
  public altitude: number;

  constructor() {
    this.longitude = 7.74553;
    this.latitude = 48.58392;
    this.altitude = 147.000;
  }

  ngOnInit() {
    // do something
  }
}
