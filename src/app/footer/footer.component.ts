import { Component, OnInit } from '@angular/core';
import { TimersService } from '../timers.service';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerTimerRef;
  overallTimer: number;

  constructor(private timersService: TimersService, private anonymousIdentifierService: AnonymousIdentifierService) {
    this.footerTimerRef = setInterval(() => {
      this.overallTimer = this.timersService.overallStopwatchSeconds;
    });
   }

  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

}
