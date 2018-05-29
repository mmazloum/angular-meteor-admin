import {Component, OnInit, Inject, NgZone} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../../../core/common/route.animation';
import {Accounts} from 'meteor/accounts-base';


@Component({
  selector: 'vr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private zone: NgZone // because there is a bug in dom refresh
  ) { }

  ngOnInit() {
    this.zone.run(() => {})
  }

  register() {
    if (this.password == this.passwordConfirm) {
      Accounts.createUser({username: this.name, email: this.email, password: this.password, profile: {valid: false}}, (err) => {
        if (err) {
          console.warn(err.reason);
          if (err.reason == "Email already exists.") {
            this.zone.run(() => {
              this.dialog.open(RegisterDialogComponent, {
                data: {title: 'Erreur', message: 'Email déja utilisé'}
              })
            })

          }
        }
        else this.router.navigate(['/']);
      })
    }
    else {
      this.dialog.open(RegisterDialogComponent, {
        data: {title: 'Erreur', message: 'Mots de passe différents'}
      })
    }


  }

}

@Component({
  selector: 'vr-demo-dialog',
  template: `

    <div mat-dialog-title fxLayout="row" fxLayoutAlign="space-between center">
      <div>{{data?.title}}</div>
      <button type="button" mat-icon-button (click)="close('No answer')" tabindex="-1">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content>
      <p>{{data?.message}}</p>
    </mat-dialog-content>


    <mat-dialog-actions align="center">
      <button mat-button (click)="close('OK')">OK</button>
    </mat-dialog-actions>

  `
})
export class RegisterDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {title: string, message:string}, private dialogRef: MatDialogRef<RegisterDialogComponent>) {
  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}
