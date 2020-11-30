import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-interference-room4-puzzle1',
  templateUrl: './interference-room4-puzzle1.component.html',
  styleUrls: ['./interference-room4-puzzle1.component.css']
})
export class InterferenceRoom4Puzzle1Component implements OnInit {
  puzzleWon = !(this.lockedRoomsService.roomLocked[3]);
  waveDragPositionX = 0;

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/interference_room4');
  }

  // tslint:disable-next-line:typedef
  waveDragEnd(event: CdkDragEnd){
    this.waveDragPositionX = event.source.getFreeDragPosition().x;
  }

  // tslint:disable-next-line:typedef
  public submitClick(){
    if (this.waveDragPositionX >= -68 && this.waveDragPositionX <= -38) {
      this.lockedRoomsService.roomLocked[3] = false;
      this.puzzleWon = true;
    }
  }

}
