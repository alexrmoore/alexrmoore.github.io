import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-in-game-instructions',
  templateUrl: './in-game-instructions.component.html',
  styleUrls: ['./in-game-instructions.component.css']
})
export class InGameInstructionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    history.back();
  }

}
