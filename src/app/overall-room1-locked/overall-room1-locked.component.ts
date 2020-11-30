import { Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-overall-room1-locked',
  templateUrl: './overall-room1-locked.component.html',
  styleUrls: ['./overall-room1-locked.component.css']
})
export class OverallRoom1LockedComponent implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onLeftClick(){
    this.router.navigateByUrl('/photoelectric_room3');
  }

  // tslint:disable-next-line:typedef
  public puzzle1Click(){
    this.router.navigateByUrl('/overall_room1_puzzle1');
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    this.lockedRoomsService.roomLocked[7] = false;
    this.router.navigateByUrl('/overall_room1');
  }
}
