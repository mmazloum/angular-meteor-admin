import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../core/common/route.animation';

@Component({
  selector: 'vr-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  send() {
    this.router.navigate(['/']);
  }

}
