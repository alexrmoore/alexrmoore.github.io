import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';
import { LockedRoomsService } from '../locked-rooms.service';

@Component({
  selector: 'app-room3-locked',
  templateUrl: './room3-locked.component.html',
  styleUrls: ['./room3-locked.component.css']
})
export class Room3LockedComponent implements OnInit {
  constructor(private router: Router, private lockedRoomsService: LockedRoomsService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    const checkbox1 = document.getElementById('room3checkbox_1') as HTMLInputElement;
    const checkbox2 = document.getElementById('room3checkbox_2') as HTMLInputElement;
    const checkbox3 = document.getElementById('room3checkbox_3') as HTMLInputElement;
    const slider3 = document.getElementById('room3slider') as HTMLInputElement;
    const slider3value = slider3.value;

    if (event.clientX < 40){
      // console.log('Left Button Clicked (Room 2)');
      this.router.navigateByUrl('/room2');
    }
    if (slider3value === '100'){
      if (checkbox1.checked && checkbox2.checked && checkbox3.checked){
        this.lockedRoomsService.roomLockedTestPath[3] = false;
        this.router.navigateByUrl('/room3');
      }
    }
  }

}
