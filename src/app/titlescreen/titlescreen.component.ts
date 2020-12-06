import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { AnonymousIdentifierService } from '../anonymous-identifier.service';

@Component({
  selector: 'app-titlescreen',
  templateUrl: './titlescreen.component.html',
  styleUrls: ['./titlescreen.component.css']
})
export class TitlescreenComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private lockedRoomsService: LockedRoomsService, private anonymousIdentifierService: AnonymousIdentifierService) { }

  anonymousCode = this.anonymousIdentifierService.anonymousCode;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  startButton() {
    this.router.navigateByUrl('/startinstructions');
    this.lockedRoomsService.roomLocked = [true, true, true, true, true, true, true, true];
  }

}
