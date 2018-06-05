import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import sortBy from 'lodash-es/sortBy';
import * as moment from 'moment';
import { MediaQueryService } from '../../../core/common/mediareplay/media-replay.service';
import { fadeOutAnimation } from '../../../core/common/route.animation';
import { ScrollbarDirective } from '../../../core/common/scrollbar/scrollbar.directive';
import { chatDemoData } from './chat.demo';

@Component({
  selector: 'fury-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  host: {
    '[@fadeOutAnimation]': 'true'
  },
  animations: [fadeOutAnimation]
})
export class ChatComponent implements OnInit {

  drawerOpen = true;
  drawerMode = 'side';
  replyCtrl: FormControl;

  chats: any[];
  activeChat: any;

  @ViewChild('messagesScroll', { read: ScrollbarDirective }) messagesScroll: ScrollbarDirective;

  constructor(private cd: ChangeDetectorRef, private mediaQueryService: MediaQueryService) {
  }

  ngOnInit() {
    this.replyCtrl = new FormControl();

    this.chats = sortBy(chatDemoData, 'lastMessageTime').reverse();
    this.activeChat = this.chats[0];

    this.mediaQueryService.isLowerThanMedium$.subscribe((isLowerThanMedium) => {
      if (isLowerThanMedium) {
        this.drawerOpen = false;
        this.drawerMode = 'over';
      } else if (!isLowerThanMedium) {
        this.drawerOpen = true;
        this.drawerMode = 'side';
      }
    });
  }

  setActiveChat(chat) {
    this.activeChat = chat;

    if (this.drawerMode === 'over') {
      this.drawerOpen = false;
    }
  }

  send() {
    if (this.replyCtrl.value) {
      this.chats[0].messages.push({
        message: this.replyCtrl.value,
        when: moment(),
        who: 'me'
      });

      this.replyCtrl.reset();
      this.cd.markForCheck();
      setTimeout(() => {
        this.messagesScroll.scrollbarRef.scrollTo(0, this.messagesScroll.scrollbarRef.contentEl.scrollHeight);
      }, 10);
    }
  }

  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }
}
