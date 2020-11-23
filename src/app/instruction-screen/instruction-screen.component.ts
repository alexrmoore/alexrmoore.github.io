import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instruction-screen',
  templateUrl: './instruction-screen.component.html',
  styleUrls: ['./instruction-screen.component.css']
})
export class InstructionScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public onBackClick(){
    this.router.navigateByUrl('/home');
  }
}
