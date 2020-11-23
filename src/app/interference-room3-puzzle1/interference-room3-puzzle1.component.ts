import { Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-interference-room3-puzzle1',
  templateUrl: './interference-room3-puzzle1.component.html',
  styleUrls: ['./interference-room3-puzzle1.component.css']
})
export class InterferenceRoom3Puzzle1Component implements OnInit {
  waveDragPositionX = 0;

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    if (this.lockedRoomsService.roomLocked[3]){
      this.router.navigateByUrl('/interference_room3_locked');
    }
    else {
      this.router.navigateByUrl('/interference_room3');
    }
  }

  // tslint:disable-next-line:typedef
  waveDragEnd(event: CdkDragEnd){
    this.waveDragPositionX = event.source.getFreeDragPosition().x;
  }

  // tslint:disable-next-line:typedef
  public submitClick(){
    if (this.waveDragPositionX === -250) {
      this.lockedRoomsService.roomLocked[3] = false;
    }
  }

}
