import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-room2-locked',
  templateUrl: './room2-locked.component.html',
  styleUrls: ['./room2-locked.component.css']

})
export class Room2LockedComponent implements OnInit {
  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }
  values = '';

  // tslint:disable-next-line:typedef
  onKey(event: any) { // without type info
    this.values = '';
    this.values += event.target.value;
    if (this.values === 'password'){
      this.lockedRoomsService.roomLockedTestPath[2] = false;
      this.router.navigateByUrl('/room2');
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    if (event.clientX < 40){
      // console.log('Left Button Clicked (Room 2)');
      this.router.navigateByUrl('/room1');
    }
  }
}
