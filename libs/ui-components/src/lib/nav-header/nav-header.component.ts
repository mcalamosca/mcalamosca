import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class NavHeaderComponent {
  @Input() appName = '';
  @Input() navItems: NavItem[] = [];
  @Input() leftImageUrl: string | null = null;
  @Input() rightImageUrl: string | null = null;
  @Input() headerVariant: NavHeaderVariant = NavHeaderVariant.Center;
  @Input() subNav = false;
  active: string | string[] = '';
  @Output() toggleSidenav = new EventEmitter();

  NavHeaderVariant = NavHeaderVariant;
  emitToggle() {
    this.toggleSidenav.emit();
  }
}
