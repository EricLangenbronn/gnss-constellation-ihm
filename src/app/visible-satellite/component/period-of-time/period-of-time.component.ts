import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent, MatDateRangePicker, MatEndDate, MatStartDate } from '@angular/material/datepicker';


export class ObservationPeriod {

  private DEFAULT_START_DATE: Date = new Date(2015, 1, 1, 0, 0, 0, 0);
  private DEFAULT_END_DATE: Date = new Date(2015, 1, 2, 0, 0, 0, 0);

  private startDate: Date;
  private endDate: Date;

  constructor(startDate: Date, endDate: Date) {
    if (startDate) {
      this.startDate = startDate;
    } else {
      this.startDate = this.DEFAULT_START_DATE;
    }

    if (endDate) {
      this.endDate = endDate;
    } else {
      this.endDate = this.DEFAULT_END_DATE;
    }
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public setStartDate(startDate: Date) {
    if (startDate) {
      this.startDate = startDate;
    } else {
      this.startDate = this.DEFAULT_START_DATE;
    }
  }

  public getEndDate(): Date {
    return this.endDate;
  }

  public setEndDate(endDate: Date) {
    if (endDate) {
      this.endDate = endDate;
    } else {
      this.endDate = this.DEFAULT_END_DATE;
    }
  }
}

@Component({
  selector: 'period-of-time',
  templateUrl: './period-of-time.component.html',
  styleUrls: ['./period-of-time.component.css'],
  providers: []
})
export class PeriodOfTimeComponent implements AfterViewInit {

  @Input() observationPeriod: ObservationPeriod = new ObservationPeriod(new Date(2015, 1, 1, 0, 0, 0, 0), new Date(2015, 1, 2, 0, 0, 0, 0));
  @Output() eventUpdateObservationPeriod: EventEmitter<ObservationPeriod> = new EventEmitter<ObservationPeriod>();

  @ViewChild(MatDateRangePicker, { static: false }) dateRangepicker!: MatDateRangePicker<Date>;
  @ViewChild(MatStartDate, { static: false }) matStartDate!: MatStartDate<Date>;
  @ViewChild(MatEndDate, { static: false }) matEndDate!: MatEndDate<Date>;

  public rangeFromControl = new FormGroup({
    start: new FormControl<Date | null>(this.observationPeriod.getStartDate()),
    end: new FormControl<Date | null>(this.observationPeriod.getEndDate()),
  });

  constructor() {
  }

  ngAfterViewInit(): void {
    this.matStartDate.dateChange.subscribe((dateChange: MatDatepickerInputEvent<Date, any>) => {
      if (dateChange.value) {
        this.observationPeriod.setStartDate(dateChange.value);
        this.eventUpdateObservationPeriod.emit(this.observationPeriod);
      }
    });

    this.matEndDate.dateChange.subscribe((dateChange: MatDatepickerInputEvent<Date, any>) => {
      if (dateChange.value) {
        this.observationPeriod.setEndDate(dateChange.value)
        this.eventUpdateObservationPeriod.emit(this.observationPeriod);
      }
    });
  }

  public getObservationPeriod(): ObservationPeriod {
    return this.observationPeriod;
  }
}
