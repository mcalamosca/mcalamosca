import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavItem } from '@mcalamosca/ui-components';

@Component({
  selector: 'forestbjorn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appName = 'Forest Björn';
  navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    {
      label: 'Portfolio',
      route: '/portfolio',
      children: [
        { label: 'Drone', route: '/portfolio/drone' },
        { label: 'Portrait', route: '/portfolio/portrait' },
        { label: 'Pets', route: '/portfolio/pets' },
        { label: 'Real Estate', route: '/portfolio/real-estate' },
        { label: 'Family', route: '/portfolio/family' },
        { label: 'Headshot', route: '/portfolio/headshot' },
      ],
    },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];
  mode: MatDrawerMode = 'side';
  opened = true;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
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
