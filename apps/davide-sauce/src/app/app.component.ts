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
  subtitle = 'All Natural Tomato Sauce';
  footerName = "Davide's All Natural Tomato Sauce";
  phoneNumber = '(412) 532-6155';
  leftImageUrl = '../assets/images/olive-left-white.png';
  rightImageUrl = '../assets/images/olive-right-white.png';
  navItems: NavItem[] = [
    { label: 'Home', route: '' },
    { label: 'History', route: '/history' },
    { label: 'Health', route: '/health' },
    { label: 'Products', route: '/products' },
    // { label: 'Recipes', route: '/recipes' },
    { label: 'Contact Us', route: '/contact-us' },
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
