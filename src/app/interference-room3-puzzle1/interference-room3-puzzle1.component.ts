import { Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { PuzzleTrackingService} from '../puzzle-tracking.service';

@Component({
  selector: 'app-interference-room3-puzzle1',
  templateUrl: './interference-room3-puzzle1.component.html',
  styleUrls: ['./interference-room3-puzzle1.component.css']
})
export class InterferenceRoom3Puzzle1Component implements OnInit {
  puzzleWon = !(this.lockedRoomsService.roomLocked[4]);

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private lockedRoomsService: LockedRoomsService, private puzzleTrackingService: PuzzleTrackingService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    if (this.lockedRoomsService.roomLocked[4]){
      this.router.navigateByUrl('/interference_room3_locked');
    }
    else {
      this.router.navigateByUrl('/interference_room3');
    }
  }

  // tslint:disable-next-line:typedef
  public submitClick(){
    this.puzzleTrackingService.puzzleAttempts[4] = this.puzzleTrackingService.puzzleAttempts[4] + 1;
    const interferencecheckboxA = document.getElementById('interferencecheckbox_a') as HTMLInputElement;
    const interferencecheckboxB = document.getElementById('interferencecheckbox_b') as HTMLInputElement;
    const interferencecheckboxC = document.getElementById('interferencecheckbox_c') as HTMLInputElement;
    const interferencecheckboxD = document.getElementById('interferencecheckbox_d') as HTMLInputElement;
    const interferencecheckboxE = document.getElementById('interferencecheckbox_e') as HTMLInputElement;
    // tslint:disable-next-line:max-line-length
    if (interferencecheckboxA.checked && !interferencecheckboxB.checked && !interferencecheckboxC.checked && interferencecheckboxD.checked && !interferencecheckboxE.checked) {
      this.lockedRoomsService.roomLocked[4] = false;
      this.puzzleWon = true;
    }
  }
}
