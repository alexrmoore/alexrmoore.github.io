import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { PuzzleTrackingService} from '../puzzle-tracking.service';

@Component({
  selector: 'app-reflection-room2-puzzle1',
  templateUrl: './reflection-room2-puzzle1.component.html',
  styleUrls: ['./reflection-room2-puzzle1.component.css']
})
export class ReflectionRoom2Puzzle1Component implements OnInit {

  puzzleWon = !(this.lockedRoomsService.roomLocked[2]);

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private lockedRoomsService: LockedRoomsService, private puzzleTrackingService: PuzzleTrackingService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    if (this.lockedRoomsService.roomLocked[0] || this.lockedRoomsService.roomLocked[1] || this.lockedRoomsService.roomLocked[2]){
      this.router.navigateByUrl('/reflection_room2_locked');
    }
    else {
      this.router.navigateByUrl('/reflection_room2');
    }
  }

  // tslint:disable-next-line:typedef
  public submitClick(){
    this.puzzleTrackingService.puzzleAttempts[2] = this.puzzleTrackingService.puzzleAttempts[2] + 1;
    const reflectioncheckboxA = document.getElementById('reflectioncheckbox_a') as HTMLInputElement;
    const reflectioncheckboxB = document.getElementById('reflectioncheckbox_b') as HTMLInputElement;
    const reflectioncheckboxC = document.getElementById('reflectioncheckbox_c') as HTMLInputElement;
    const reflectioncheckboxD = document.getElementById('reflectioncheckbox_d') as HTMLInputElement;

    if (reflectioncheckboxB.checked && reflectioncheckboxD.checked && !reflectioncheckboxA.checked && !reflectioncheckboxC.checked) {
      this.lockedRoomsService.roomLocked[2] = false;
      this.puzzleWon = true;
    }
  }

}
