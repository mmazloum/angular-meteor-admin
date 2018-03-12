import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vr-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input('feeds') feeds: any[];
  @Input('title') title: string = 'Recent Activities';
  @Input('subTitle') subTitle: string = 'Your daily news feed';

  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
