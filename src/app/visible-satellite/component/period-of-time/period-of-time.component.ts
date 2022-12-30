import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';


@Component({
  selector: 'period-of-time',
  templateUrl: './period-of-time.component.html',
  styleUrls: ['./period-of-time.component.css'],
  providers: []
})
export class PeriodOfTimeComponent implements OnInit {

  @ViewChild(MatDatepicker, { static: false }) datepickerStartTime!: MatDatepicker<Date>;
  @ViewChild(MatDatepicker, { static: false }) datepickerEndTime!: MatDatepicker<Date>;


  public startDate: Date;
  public endDate: Date;

  constructor() {
    this.startDate = new Date(Date.UTC(2015, 1, 1, 0, 0, 0, 0));
    this.endDate = new Date(Date.UTC(2015, 1, 2, 0, 0, 0, 0));
  }

  ngOnInit() {
    // do something
  }

  getTimestampStartMeasureSecond(): string {
    return "" + (this.startDate.getTime() / 1000);
  }

  getTimestampEndMeasureSecond(): string {
    return "" + (this.endDate.getTime() / 1000);
  }
}
