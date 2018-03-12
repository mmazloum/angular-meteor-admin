import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-message-widget',
  templateUrl: './message-widget.component.html',
  styleUrls: ['./message-widget.component.scss']
})
export class MessageWidgetComponent implements OnInit {

  messages: any[];

  constructor() {
  }

  ngOnInit() {
    this.messages = [
      {
        image: 'assets/img/avatars/1.png',
        from: 'Jonah Muisel',
        message: 'Hey! What\'s up?',
        online: true
      },
      {
        image: 'assets/img/avatars/2.png',
        from: 'Conner Oreilly',
        message: 'Love your newest theme!',
        online: true
      },
      {
        image: 'assets/img/avatars/3.png',
        from: 'Zac Husein',
        message: 'Don\'t forget to update!',
        online: false
      },
      {
        image: 'assets/img/avatars/4.png',
        from: 'Jenniffer Litt',
        message: 'Last weekend was great xoxo',
        online: false
      }
    ]
  }

}
