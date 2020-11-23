import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room3',
  templateUrl: './room3.component.html',
  styleUrls: ['./room3.component.css']
})
export class Room3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    if (event.clientX < 40){
      // console.log('Left Button Clicked (Room 3)');
      this.router.navigateByUrl('/room2');
    }
    if (event.clientX > 770){
      // console.log('Right Button Clicked (Room 2)');
      this.router.navigateByUrl('/room4');
    }
  }

}
