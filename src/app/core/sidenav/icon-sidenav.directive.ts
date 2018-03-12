import {Directive, HostBinding, HostListener, Inject, OnInit, OnDestroy} from '@angular/core';
import { SidenavService } from "./sidenav.service";
import { SidenavItem } from "./sidenav-item/sidenav-item.model";
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import { Subscription } from "rxjs";
import {MediaReplayService} from "./mediareplay/media-replay.service";

@Directive({
  selector: '[msIconSidenav]'
})
export class IconSidenavDirective implements OnInit, OnDestroy {

  private _mediaSubscription: Subscription;
  isMobile: boolean = false;

  @HostBinding('class.icon-sidenav')
  get isIconSidenav(): boolean {
    return this.sidenavService.isIconSidenav;
  }

  @HostBinding('class.collapsed')
  collapsed: boolean;

  currentlyOpen: SidenavItem[];

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = false;

      this.sidenavService.nextCurrentlyOpen(this.currentlyOpen);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isIconSidenav && !this.isMobile) {
      this.collapsed = true;

      this.currentlyOpen = this.sidenavService.currentlyOpen;
      this.sidenavService.nextCurrentlyOpen([]);
    }
  }

  constructor(
    private sidenavService: SidenavService,
    private mediaReplayService: MediaReplayService
  ) { }

  ngOnInit() {
    this._mediaSubscription = this.mediaReplayService.media$.subscribe((change: MediaChange) => {
      this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
    });
  }

  ngOnDestroy() {
    this._mediaSubscription.unsubscribe();
  }
}
