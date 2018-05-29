import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../core/common/route.animation';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'vr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class LoginComponent implements OnInit, OnDestroy {

  private user: {email: string, password: string} = {
    email: '',
    password: ''
  }

  public rememberMe: boolean = true;

  constructor(
    private router: Router,
    private zone: NgZone
  ) {
  }

  ngOnInit() {
    this.zone.run(() => {
      let remember = localStorage.getItem('rememberMe');

      if (remember && remember == 'true') {
        this.rememberMe = true;
      }
      else {
        this.rememberMe = false;
      }

      let userLogin = localStorage.getItem('userLogin');

      if (userLogin) {
        this.user.email = JSON.parse(userLogin).email;
        this.user.password = JSON.parse(userLogin).password;
      }
    })

  }

  rememberMeCheck(): void {
    this.rememberMe = !this.rememberMe;
    console.log(this.rememberMe);
  }

  login() {
    Meteor.loginWithPassword(this.user.email, this.user.password, (err, resp) => {
      if (err) {
        console.error('login ERROR', err);
      }
      else {

        this.router.navigate(['']).then((resp) => {
          this.zone.run(() => console.log('login success: ', Meteor.user()._id))
        })
        .catch(err => console.log('nav error: ', err));
      }
    });
  }

  ngOnDestroy(): void {

    if (this.rememberMe === true) {
      console.log('on destroy true');
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('userLogin', JSON.stringify(this.user));
    }
    else {
      console.log('on destroy false');
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('userLogin');
    }

  }

}
