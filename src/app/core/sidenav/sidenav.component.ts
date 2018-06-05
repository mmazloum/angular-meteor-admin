import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '../common/component-destroyed';
import { SidenavItem } from './sidenav-item/sidenav-item.interface';
import { SidenavState } from './sidenav-state.enum';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'fury-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('sidenavState', [
      state(SidenavState.Collapsed, style({
        position: 'absolute',
        width: '70px'
      })),
      state(SidenavState.CollapsedHover, style({
        position: 'absolute',
        width: '270px'
      })),
      state(SidenavState.Expanded, style({
        position: 'relative',
        width: '270px'
      })),
      state(SidenavState.Mobile, style({
        position: 'absolute',
        width: '270px',
        transform: 'translate3d(-270px, 0, 0)',
        visibility: 'hidden'
      })),
      state(SidenavState.MobileOpen, style({
        position: 'absolute',
        width: '270px',
        transform: 'translate3d(0, 0, 0)',
        visibility: 'visible'
      })),
      transition(`${SidenavState.Expanded} => ${SidenavState.CollapsedHover}`, [
        style({ position: 'absolute' }),
        animate('300ms cubic-bezier(.35, 0, .25, 1)')
      ]),
      transition(`${SidenavState.Expanded} => ${SidenavState.Collapsed}`, [
        style({ position: 'absolute' }),
        animate('300ms cubic-bezier(.35, 0, .25, 1)')
      ]),
      transition(`${SidenavState.CollapsedHover} => ${SidenavState.Collapsed}`, [
        animate('300ms cubic-bezier(.35, 0, .25, 1)')
      ]),
      transition(`${SidenavState.Collapsed} => ${SidenavState.CollapsedHover}`,
        animate('300ms cubic-bezier(.35, 0, .25, 1)')
      ),
      transition(`${SidenavState.Mobile} => ${SidenavState.MobileOpen}`,
        animate('300ms cubic-bezier(.35, 0, .25, 1)')
      ),
      transition(`${SidenavState.MobileOpen} => ${SidenavState.Mobile}`,
        animate('300ms cubic-bezier(.35, 0, .25, 1)')
      )
    ]),
  ]
})
export class SidenavComponent implements OnInit, OnDestroy {

  items$: Observable<SidenavItem[]>;
  sidenavState$: Observable<SidenavState>;

  sidenavState: string;
  isCollapsedState: boolean;

  @HostBinding('class')
  get sidenavClasses() {
    return `sidenav ${this.sidenavState}`;
  }
  isCollapsed: boolean;
  isMobile: boolean;


  constructor(private router: Router,
              private sidenavService: SidenavService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.items$ = this.sidenavService.items$.pipe(
      map((items: SidenavItem[]) => this.sidenavService.sortRecursive(items, 'position'))
    );

    this.sidenavState$ = this.sidenavService.sidenavState$;
    this.sidenavService.sidenavState$.subscribe(sidenavState => this.sidenavState = sidenavState);

    this.sidenavService.sidenavState$.pipe(
      takeUntil(componentDestroyed(this))
    ).subscribe(sidenavState => {
      this.isCollapsedState = sidenavState === SidenavState.Collapsed || sidenavState === SidenavState.CollapsedHover;
      this.isCollapsed = sidenavState === SidenavState.Collapsed;
      this.cd.markForCheck();
    });
  }

  toggleCollapsed() {
    this.sidenavService.sidenavState = this.sidenavService.sidenavState === SidenavState.Expanded ? SidenavState.Collapsed : SidenavState.Expanded;
  }

  @HostListener('mouseenter')
  @HostListener('touchenter')
  onMouseEnter() {
    if (this.isCollapsedState && !this.isMobile) {
      this.sidenavService.sidenavState = SidenavState.CollapsedHover;
    }
  }

  @HostListener('mouseleave')
  @HostListener('touchleave')
  onMouseLeave() {
    if (this.isCollapsedState && !this.isMobile) {
      this.sidenavService.sidenavState = SidenavState.Collapsed;
    }
  }

  ngOnDestroy() {
  }
}
