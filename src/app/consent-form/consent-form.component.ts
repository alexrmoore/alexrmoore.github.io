import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consent-form',
  templateUrl: './consent-form.component.html',
  styleUrls: ['./consent-form.component.css']
})
export class ConsentFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  informationClick(): void {
    window.open('https://drive.google.com/file/d/1yxbr32XD7XPJb-nSw4NsR7y246uSEQTq/view?usp=sharing', '_blank');
  }

  submitClick(): void {
    const consent1 = document.getElementById('consent1') as HTMLInputElement;
    const consent2 = document.getElementById('consent2') as HTMLInputElement;
    const consent3 = document.getElementById('consent3') as HTMLInputElement;
    const consent4 = document.getElementById('consent4') as HTMLInputElement;
    const consent5 = document.getElementById('consent5') as HTMLInputElement;
    if (consent1.checked && consent2.checked && consent3.checked && consent4.checked && consent5.checked) {
      this.router.navigateByUrl('/presurvey');
    } else {
      this.router.navigateByUrl('/consent_form_failed');
    }
  }

}
