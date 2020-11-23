import { Component, HostListener, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {Router} from '@angular/router';


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

  constructor(private router: Router, private homeComponent: HomeComponent) { }

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
    });
    this.newstart = false;
  }


  // tslint:disable-next-line:typedef
  onHomeClick(){
    this.newstart = true;
    this.stopwatch = undefined;
    this.stopwatchSeconds = undefined;
    clearInterval(this.timerRef);
    this.router.navigateByUrl('/home');
  }

  // tslint:disable-next-line:typedef
  onHintClick(){
    console.log('Hint Button Clicked!');
  }
}
