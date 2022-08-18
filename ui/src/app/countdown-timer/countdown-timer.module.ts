import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer.component';
import {MatSliderModule} from "@angular/material/slider";
@NgModule({
  declarations: [
    CountdownTimerComponent
  ],
  exports: [
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ]
})
export class CountdownTimerModule { }
