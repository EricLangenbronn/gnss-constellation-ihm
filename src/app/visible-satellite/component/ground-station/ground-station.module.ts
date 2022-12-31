import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { GroundStationComponent, GroundStation } from './ground-station.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatRadioModule
  ],
  exports: [GroundStationComponent],
  declarations: [GroundStationComponent]
})
export class GroundStationComponentModule { }
