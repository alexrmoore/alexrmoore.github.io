import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';


@Component({
  selector: 'app-overall-room1',
  templateUrl: './overall-room1.component.html',
  styleUrls: ['./overall-room1.component.css']
})
export class OverallRoom1Component implements OnInit {

  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onRightClick(){
    this.router.navigateByUrl('/complete_room');
  }

  // tslint:disable-next-line:typedef
  public onLeftClick(){
    this.router.navigateByUrl('/photoelectric_room3');
  }
}
