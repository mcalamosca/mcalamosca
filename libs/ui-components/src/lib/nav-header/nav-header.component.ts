import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

export interface NavItem {
  label: string;
  route: string;
  children?: NavItem[];
}

export enum NavHeaderVariant {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

@Component({
  selector: 'mcui-nav-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatListModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent implements OnInit {
  @Input() appName = '';
  @Input() subtitle = '';
  @Input() navItems: NavItem[] = [];
  @Input() leftImageUrl: string | null = null;
  @Input() rightImageUrl: string | null = null;
  @Input() headerVariant: NavHeaderVariant = NavHeaderVariant.Center;
  @Input() subNav = false;
  active: string | string[] = '';
  @Output() toggleSidenav = new EventEmitter();

  //constructor with breakpoint observer to determine if the sidenav should be open or closed
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 640px)']).subscribe((result) => {
      console.log(result);
      if (result.matches) {
        this.subNav = false;
      } else {
        this.subNav = true;
      }
    });
  }

  NavHeaderVariant = NavHeaderVariant;
  emitToggle() {
    this.toggleSidenav.emit();
  }
}
