import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LockedRoomsService {
  roomLockedTestPath = [true, true, true, true];
  // roomLocked = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
  roomLocked = [true, true, true, true, true, true];
  constructor() {
  }

  /*
  // tslint:disable-next-line:typedef
  public whichRoomsLocked(roomLocked){
    console.log(roomLocked[0]);
    console.log(roomLocked[1]);
    console.log(roomLocked[2]);
  }
  */

}
