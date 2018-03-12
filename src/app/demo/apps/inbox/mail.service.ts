import { Injectable } from '@angular/core';
import {Mail} from "./mail.model";
import {BehaviorSubject, Observable} from "rxjs";
import {demoMails} from "./mails.demo";

@Injectable()
export class MailService {

  private _mailsSubject: BehaviorSubject<Mail[]> = new BehaviorSubject<Mail[]>([]);
  private _mails: any[] = [ ];
  mails$: Observable<Mail[]> = this._mailsSubject.asObservable();

  constructor() {
    this._mails = demoMails;

    this._mailsSubject.next(this._mails);
  }

  get unreadMailsCount(): number {
    return this._mails.filter((mail) => { return (mail.read == false) }).length;
  }
}
