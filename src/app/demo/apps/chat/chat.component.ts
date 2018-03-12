import {Component, OnInit} from '@angular/core';
import sortBy from 'lodash-es/sortBy';
import * as moment from 'moment';
import {fadeInAnimation} from '../../../core/common/route.animation';
import {chatDemoData} from './chat.demo';

@Component({
  selector: 'vr-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class ChatComponent implements OnInit {

  chats: any[];
  activeChat: any;
  newMessage: string;

  constructor() { }

  ngOnInit() {
    this.chats = sortBy(chatDemoData, 'lastMessageTime').reverse();
    this.activeChat = this.chats[0];
  }

  setActiveChat(chat) {
    this.activeChat = chat;
  }

  send() {
    if (this.newMessage) {
      this.chats[0].messages.push({
        message: this.newMessage,
        when: moment(),
        who: 'me'
      });

      this.newMessage = '';
    }
  }

  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }
}
