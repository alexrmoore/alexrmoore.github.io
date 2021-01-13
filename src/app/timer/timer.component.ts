import { Component, HostListener, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  stopwatch: number;
  stopwatchSeconds: number;
  timerRef;
  newstart = true;
  hideTimer = false;
  firstEndscreen = true;
  endscreenTimeLocal = 0;

  constructor(private router: Router, private homeComponent: HomeComponent, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  startTimer(){
    this.homeComponent.PhysicsPathStart();
    this.hideTimer = this.homeComponent.hideTimer;
    const startTime = Date.now() - (this.stopwatch || 0);
    this.timerRef = setInterval(() => {
      this.stopwatch = (Date.now() - startTime) / 1000;
      this.stopwatchSeconds = Math.floor(this.stopwatch);
      if (this.router.url === '/endscreen' && this.firstEndscreen){
        this.lockedRoomsService.endTimerStore = this.stopwatchSeconds;
        this.endscreenTimeLocal = this.lockedRoomsService.endTimerStore;
        this.firstEndscreen = false;
        this.hideTimer = true;
      }
    });
    this.newstart = false;
  }

  // tslint:disable-next-line:typedef
  onHomeClick(){
    // this.timerRunning = false;
    this.newstart = true;
    this.stopwatch = undefined;
    this.stopwatchSeconds = undefined;
    clearInterval(this.timerRef);
    this.router.navigateByUrl('/home');
  }

  onHintClick(): void{
    console.log('Hint Button Clicked!');
    console.log(this.lockedRoomsService.roomLocked);
  }

}
