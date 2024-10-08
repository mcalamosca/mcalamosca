import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
  highlight?: boolean;
  url?: string;
}

export type NavHeaderAlign = 'flex-start' | 'center' | 'flex-end' | 'custom';

@Component({
  selector: 'mcui-nav-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
  ],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent implements OnInit {
  @Input() appName = '';
  @Input() subtitle = '';
  @Input() navItems: NavItem[] = [];
  @Input() leftImageUrl: string | null = null;
  @Input() rightImageUrl: string | null = null;
  @Input() align: NavHeaderAlign = 'center';
  @Input() subNav = false;
  active: string | string[] = '';
  showMenuIcon = false;

  @Output() toggleSidenav = new EventEmitter();

  //auth related interactions
  @Input() enableAuth = false;
  @Input() user!: User | null;
  @Output() authAction = new EventEmitter<'login' | 'logout'>();

  //constructor with breakpoint observer to determine if the sidenav should be open or closed
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-device-width: 640px)']).subscribe((result) => {
      this.subNav = !result.matches;
      this.showMenuIcon = result.matches;
    });
  }

  handleToggle() {
    this.toggleSidenav.emit();
  }

  handleAuthAction() {
    if (this.user) {
      this.authAction.emit('logout');
    } else {
      this.authAction.emit('login');
    }
  }
}
