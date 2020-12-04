import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class AnonymousIdentifierService {
  anonymousCode: string;
  constructor() { }

  // tslint:disable-next-line:typedef
  generateUUID(){
    this.anonymousCode = UUID.UUID();
  }

}


