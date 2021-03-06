import { Component, OnInit } from '@angular/core';
import { TimersService } from '../timers.service';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerTimerRef;
  overallTimer: string;
  hideTimer: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private timersService: TimersService, private anonymousIdentifierService: AnonymousIdentifierService, private lockedRoomsService: LockedRoomsService) {
    this.footerTimerRef = setInterval(() => {
      this.overallTimer = this.timersService.finalTimeString;
      this.hideTimer = this.timersService.hideTimer;
    });
  }

  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onInstructionsClick(){
    this.router.navigateByUrl('/instructions');
    this.timersService.currentPauseTime = this.timersService.overallStopwatch;
    this.timersService.stopOverallTimer();
  }

  onHintClick(): void{
    console.log('Hint Button Clicked!');
    console.log(this.lockedRoomsService.roomLocked);
  }

  onGiveUpClick(): void{
    console.log('Give Up Button Clicked!');
  }

}
