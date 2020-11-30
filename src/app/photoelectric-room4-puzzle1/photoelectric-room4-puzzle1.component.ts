import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-photoelectric-room4-puzzle1',
  templateUrl: './photoelectric-room4-puzzle1.component.html',
  styleUrls: ['./photoelectric-room4-puzzle1.component.css']
})
export class PhotoelectricRoom4Puzzle1Component implements OnInit {
  puzzleWon = !(this.lockedRoomsService.roomLocked[5]);
  dragPositionX1 = 0;
  dragPositionY1 = 0;
  dragPositionX2 = 0;
  dragPositionY2 = 0;

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/photoelectric_room4');
  }

  // tslint:disable-next-line:typedef
  dragEnd1(event: CdkDragEnd) {
    this.dragPositionX1 = event.source.getFreeDragPosition().x;
    this.dragPositionY1 = event.source.getFreeDragPosition().y;  // There is definitely a way to do this in one function
    this.dragEnd();
  }

  // tslint:disable-next-line:typedef
  dragEnd2(event: CdkDragEnd) {
    this.dragPositionX2 = event.source.getFreeDragPosition().x;
    this.dragPositionY2 = event.source.getFreeDragPosition().y;
    this.dragEnd();
  }

  // PUT ALL DRAG BOXES IN ONE FUNCTION

  // tslint:disable-next-line:typedef
  dragEnd() {}

  // tslint:disable-next-line:typedef
  public submitClick(){
    if (this.dragPositionX1 > 180 && this.dragPositionX1 < 200 && this.dragPositionY1 > 90 && this.dragPositionY1 < 110){
      if (this.dragPositionX2 > -220 && this.dragPositionX2 < -200 && this.dragPositionY2 > -50 && this.dragPositionY2 < -30) {
        this.lockedRoomsService.roomLocked[5] = false;
        this.puzzleWon = true;
      }
    }
  }

}
