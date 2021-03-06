import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { AnonymousIdentifierService } from './anonymous-identifier.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EscapeRoom';


  constructor(private router: Router, private anonymousIdentifierService: AnonymousIdentifierService){
    this.anonymousIdentifierService.generateUUID();
    this.router.navigateByUrl('/title');
  }
}

