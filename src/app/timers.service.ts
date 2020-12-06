import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimersService {
  overallStopwatch: number;
  overallStopwatchSeconds: number;
  overallTimerRef;
  overallTimerBoolean = false;
  finalOverallTime: number;

  constructor() { }

  // tslint:disable-next-line:typedef
  startOverallTimer() {
    const startTime = Date.now() - (this.overallStopwatch || 0);
    this.overallTimerRef = setInterval(() => {
      this.overallStopwatch = (Date.now() - startTime) / 1000;
      this.overallStopwatchSeconds = Math.floor(this.overallStopwatch);
    });
  }

  // tslint:disable-next-line:typedef
  stopOverallTimer() {

  }
}
