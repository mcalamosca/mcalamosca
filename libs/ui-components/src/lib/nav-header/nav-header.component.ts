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

@Component({
  selector: 'mc-ui-nav-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {
  @Input() appName = '';
  @Input() navItems: NavItem[] = [];
  @Input() logoUrl: string | null = null;
  @Output() toggleSidenav = new EventEmitter();

  emitToggle() {
    this.toggleSidenav.emit();
  }
}
