import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { map } from 'rxjs/internal/operators/map';

class ElevationMask {
  private elevationMask: Number;

  constructor(elevationMask: Number) {
    this.elevationMask = elevationMask;
  }

  public getElevationMask() {
    return this.elevationMask;
  }
}

@Component({
  selector: 'elevation-mask',
  templateUrl: './elevation-mask.component.html',
  styleUrls: ['./elevation-mask.component.css'],
  providers: []
})
export class ElevationMaskComponent implements AfterViewInit {

  @ViewChild('elevationMaskInput', { read: ElementRef }) elevationMaskInput!: ElementRef<HTMLInputElement>;

  elevationMaskFormControl = new FormControl('', [Validators.required, Validators.pattern('(\\+)?\\d{1,2}\\.?\\d{0,1}'), this.elevationMaskValueValidator]);

  private elevationMask: ElevationMask;

  constructor() {
    this.elevationMask = new ElevationMask(0);
  }

  ngAfterViewInit(): void {
    fromEvent(this.elevationMaskInput.nativeElement, 'keyup')
      .pipe(
        distinctUntilChanged(),
        map(() => {
          if (this.elevationMaskFormControl.valid) {
            this.elevationMask = new ElevationMask(new Number(this.elevationMaskInput.nativeElement.value));
          } else {
            this.elevationMask = new ElevationMask(0);
          }
        })
      )
      .subscribe();
  }

  public getElevationMask(): ElevationMask {
    return this.elevationMask;
  }

  public elevationMaskValueValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value !== undefined && !Number.isNaN(control.value)) {
      let elevationMask = new Number(control?.getRawValue());
      if (elevationMask >= 0.0 && elevationMask <= 90.0) {
        return null; // value ok
      }
    }

    return { 'elevationMaskValue': true };
  }
}
