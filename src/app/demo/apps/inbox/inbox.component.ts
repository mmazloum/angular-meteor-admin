import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer,
  ViewChildren
} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import sortBy from 'lodash-es/sortBy';
import {Subscription} from 'rxjs';
import {fadeInAnimation} from '../../../core/common/route.animation';
import {InboxComposeComponent} from './inbox-compose/inbox-compose.component';
import {Mail} from './mail.model';
import {MailService} from './mail.service';

@Component({
  selector: 'vr-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [fadeInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InboxComponent implements OnInit, OnDestroy, AfterViewChecked {

  shownMails: Mail[] = [ ];
  shownMailDetail: Mail;

  allMails: Mail[] = [ ];
  selectedMails: Mail[] = [ ];

  mailSubscription: Subscription;
  clickListeners: Function[] = [ ];

  shownMailsTypeGroup: string;
  respondActive: boolean;

  @ViewChildren('mailList')
  mailList: QueryList<ElementRef>;

  constructor(
    private mailService: MailService,
    private renderer: Renderer,
    public composeDialog: MatDialog,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.mailSubscription = this.mailService.mails$.subscribe((mails) => {
      this.allMails = sortBy(mails, 'when').reverse();
    });

    this.setShownMailsByGroup('primary');
  }

  ngAfterViewChecked() {
    this.createMailListClickListeners();
  }

  openComposeDialog() {
    let dialogRef = this.composeDialog.open(InboxComposeComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.snackBar.open(result);
      }
    });
  }

  createMailListClickListeners() {
    this.clickListeners.forEach((listener) => {
      listener();
    });

    this.mailList.forEach((elem, index) => {
      this.clickListeners.push(
        this.renderer.listen(elem.nativeElement, 'click', (event) => {
          if (event.target.className != 'mat-checkbox-inner-container' && event.target.className != 'mat-ripple-background') {
            this.showMailDetail(this.shownMails[index]);
          }
        })
      );
    });
  }

  resetTemporaries() {
    this.shownMailDetail = null;
    this.respondActive = false;
    this.cd.markForCheck();
  }

  showMailDetail(mail: Mail) {
    this.shownMailDetail = mail;
    mail.read = true;
    this.cd.markForCheck();
  }

  setShownMailsByGroup(group: string) {
    this.shownMails = this.allMails.filter((mail) => {
      return (mail.group == group)
    });

    this.shownMailsTypeGroup = group;
    this.resetTemporaries();
    this.cd.markForCheck();
  }

  setShownMailsByType(type: string) {
    this.shownMails = this.allMails.filter((mail) => {
      return (mail.type == type)
    });

    this.shownMailsTypeGroup = type;
    this.resetTemporaries();
    this.cd.markForCheck();
  }

  setShownMailsToStarred() {
    this.shownMails = this.allMails.filter((mail) => {
      return (mail.starred == true)
    });

    this.shownMailsTypeGroup = 'starred';
    this.resetTemporaries();
    this.cd.markForCheck();
  }

  toggleSelectAllThreads() {
    if (this.selectedMails && this.selectedMails.length > 0) {
      this.selectedMails = this.shownMails;
    } else {
      this.selectedMails = [ ];
    }
    this.cd.markForCheck();
  }

  toggleStarred(mail: Mail) {
    mail.starred = !mail.starred;
    this.cd.markForCheck();
  }

  isSelected(mail) {
    return this.selectedMails.includes(mail);
  }

  unreadMailsCount(group): string {
    let count = this.allMails.filter((mail) => { return (mail.read == false && mail.group == group) }).length;
    let text = '';

    if (count > 0) {
      text = `(${count})`
    }

    return text;
  }

  setRespondActive(active: boolean) {
    this.respondActive = active;
    this.cd.markForCheck();
  }

  ngOnDestroy() {
    this.mailSubscription.unsubscribe();

    this.clickListeners.forEach((listener) => {
      listener();
    })
  }
}
