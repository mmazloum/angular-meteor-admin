import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeOutAnimation } from '../../../core/common/route.animation';

@Component({
  selector: 'fury-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  host: {
    '[@fadeOutAnimation]': 'true'
  },
  animations: [fadeOutAnimation]
})
export class ForgotPasswordComponent implements OnInit {

  email: FormControl;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.email = new FormControl();
  }

  send() {
    this.router.navigate(['/']);
  }
}
