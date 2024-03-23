import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavItem } from '@mcalamosca/ui-components';

@Component({
  selector: 'ds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appName = "Davide's";
  navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'History', route: '/history' },
    { label: 'Products', route: '/products' },
    { label: 'Recipes', route: '/recipes' },
    { label: 'Contact Us', route: '/Contact Us' },
  ];
  mode: MatDrawerMode = 'side';
  opened = true;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((result) => {
      if (result.matches) {
        this.mode = 'over';
        this.opened = false;
      } else {
        this.mode = 'side';
        this.opened = false;
      }
    });
  }
}
