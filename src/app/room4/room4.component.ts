import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room4',
  templateUrl: './room4.component.html',
  styleUrls: ['./room4.component.css']
})
export class Room4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onEndClick(){
    this.router.navigateByUrl('/endscreen');
  }


  // tslint:disable-next-line:typedef
  @HostListener('click', ['$event']) onClick(event) {
    if (event.clientX < 40){
      // console.log('Left Button Clicked (Room 3)');
      this.router.navigateByUrl('/room3');
    }
  }
}
