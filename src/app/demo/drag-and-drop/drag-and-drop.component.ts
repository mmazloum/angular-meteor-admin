import {Component, OnInit} from '@angular/core';
import {SortablejsOptions} from 'angular-sortablejs';
import 'sortablejs';
import {fadeInAnimation} from '../../core/common/route.animation';

@Component({
  selector: 'vr-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class DragAndDropComponent implements OnInit {

  listArray: any[];
  listWithoutAvatarArray: any[];
  numberListArray: any[];
  groupOptions: SortablejsOptions = {
    group: 'testGroup',
    handle: '.drag-handle',
    animation: 300
  };

  simpleOptions: SortablejsOptions = {
    animation: 300
  };

  constructor() { }

  ngOnInit() {
    this.listArray = [
      {
        image: 'assets/img/avatars/10.png',
        name: 'Sophie',
        subject: 'Dinner?',
        content: 'Are we still going out tonight?'
      },
      {
        image: 'assets/img/avatars/11.png',
        name: 'Jack',
        subject: 'Golf weekend',
        content: 'Hey! You wanted to go play Golf?'
      },
      {
        image: 'assets/img/avatars/12.png',
        name: 'Cody',
        subject: 'Code Quality',
        content: 'Love your newest theme, so clean and slick!'
      },
      {
        image: 'assets/img/avatars/13.png',
        name: 'James',
        subject: 'Party?',
        content: 'You wanna throw a party this weekend?'
      },
      {
        image: 'assets/img/avatars/14.png',
        name: 'Jessica',
        subject: 'Love you...',
        content: 'Hope we can see us again soon :)'
      }
    ];

    this.listWithoutAvatarArray = [
      {
        name: 'Sophia Levin'
      },
      {
        name: 'James Long'
      },
      {
        name: 'Jennifer Miller'
      },
      {
        name: 'John Don'
      }
    ];

    this.numberListArray = [
      {
        name: 'Number 1'
      },
      {
        name: 'Number 2'
      },
      {
        name: 'Number 3'
      },
      {
        name: 'Number 4'
      }
    ];
  }

}
