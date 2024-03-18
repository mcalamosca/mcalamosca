import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

export interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'mc-ui-nav-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {
  @Input() appName = '';
  @Input() navItems: NavItem[] = [];
  @Output() toggleSidenav = new EventEmitter();

  emitToggle() {
    this.toggleSidenav.emit();
  }
}
