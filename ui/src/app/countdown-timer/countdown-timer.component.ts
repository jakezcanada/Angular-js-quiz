import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit,AfterViewInit, OnDestroy {
  minutes: number = 1;
  currentInterval: any;

  constructor() {
  }

  ngOnInit(): void {

  }

ngAfterViewInit() {
  setTimeout(()=>{
    this.initTimer();
  },500)


}
  ngOnDestroy(): void {
    this.currentInterval && clearInterval(this.currentInterval);
  }
  initTimer(): void {
    const countdown = document.getElementById("tiles");
    countdown && (countdown.innerHTML = "<span>" + 0 + ":</span><span>" + 0 + ":</span><span>" + 0 + "</span>");
  }
  startTimer(timerMinutes: number): void {


    function pad(n: number) {
      return (n < 10 ? '0' : '') + n;
    }


    const target_date = new Date().getTime() + ((timerMinutes * 60) * 1000); // set the countdown date
    const time_limit = ((timerMinutes * 60) * 1000);

    let days, hours, minutes, seconds; // variables for time units

     // get tag element

    getCountdown(null);
    this.currentInterval && clearInterval(this.currentInterval);
    this.currentInterval = setInterval(() => {
      getCountdown(() => {
        this.currentInterval && clearInterval(this.currentInterval);
      });

    }, 1000);

    function getCountdown(done: Function | null) {
      const countdown = document.getElementById("tiles");
      // find the amount of "seconds" between now and target
      let current_date = new Date().getTime();
      let seconds_left = (target_date - current_date) / 1000;

      if (seconds_left >= 0) {
        //  console.log(time_limit);
        if ((seconds_left * 1000) < (time_limit / 2)) {
          document.getElementById('tiles')?.classList.remove('color-full');
          document.getElementById('tiles')?.classList.add('color-half');

        }
        if ((seconds_left * 1000) < (time_limit / 4)) {
          document.getElementById('tiles')?.classList.remove('color-half');
          document.getElementById('tiles')?.classList.add('color-empty');
        }
        days = pad(parseInt(String(seconds_left / 86400)));
        seconds_left = seconds_left % 86400;

        hours = pad(parseInt(String(seconds_left / 3600)));
        seconds_left = seconds_left % 3600;

        minutes = pad(parseInt(String(seconds_left / 60)));
        seconds = pad(parseInt(String(seconds_left % 60)));

        // format countdown string + set tag value
        if (countdown) {
          countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>";
        } else {
          done && done();
        }

      }

    }

  }
  formatLabel(value: number) {
    if (value >1) {
      return value+ 'M';
    }
    return value+ 'M';

  }
  onTimeChange(event: MatSliderChange) {
    this.currentInterval && clearInterval(this.currentInterval);
    if(event && event.value && event.value> 0) {
       this.startTimer(event.value);
    }
  }
}
