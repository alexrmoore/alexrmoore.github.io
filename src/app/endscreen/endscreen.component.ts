import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TimerComponent} from '../timer/timer.component';
import { LockedRoomsService } from '../locked-rooms.service';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';


@Component({
  selector: 'app-endscreen',
  templateUrl: './endscreen.component.html',
  styleUrls: ['./endscreen.component.css']
})
export class EndscreenComponent implements OnInit {
  endSurveyURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdMlSZ-fL1uHb14gsEFY2sGnPpeQAQ4fdXJPv5ExQ_KzKWJPg/viewform?usp=pp_url&entry.330561948=';

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private timerComponent: TimerComponent, private lockedRoomsService: LockedRoomsService, private anonymousIdentifierService: AnonymousIdentifierService) { }

  stopwatchEndTime = this.timerComponent.stopwatchSeconds;
  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

  /*
  // tslint:disable-next-line:typedef
  public onResetClick(){
    this.router.navigateByUrl('/home');
  }
  */

  // tslint:disable-next-line:typedef
  public onSurveyClick(){
    // tslint:disable-next-line:max-line-length
    this.endSurveyURL = this.endSurveyURL.concat(this.anonymousCode, '&entry.1216922865=', this.lockedRoomsService.endTimerStore.toString());
    window.open(this.endSurveyURL, '_blank');
  }

}
