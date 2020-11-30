import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hideTimer = false;

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public clickInstructions(){
    this.router.navigateByUrl('/instructions');
  }

  // tslint:disable-next-line:typedef
  public PhysicsPathStart(){
    const timercheckbox = document.getElementById('hide-timer') as HTMLInputElement;
    this.hideTimer = timercheckbox.checked;
    this.router.navigateByUrl('/reflection_room1');

    // this.lockedRoomsService.roomLocked = [false, false, false, false, false, false, false, false];
    // this.lockedRoomsService.roomLocked = [false, false, false, true, true, true, true, true];
    this.lockedRoomsService.roomLocked = [true, true, true, true, true, true, true, true];
  }
}

