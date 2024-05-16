import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
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
  phoneNumber = '(412) 793-3527';
  sitemapUrl = '/sitemap.xml';
  termsOfServiceUrl = '/terms-of-service';
  leftImageUrl = '../assets/images/olive-left-white.png';
  rightImageUrl = '../assets/images/olive-right-white.png';
  navItems: NavItem[] = [
    { label: 'Home', path: '' },
    { label: 'History', path: '/history' },
    { label: 'Health', path: '/health' },
    { label: 'Products', path: '/products' },
    { label: 'Shop', path: '/shop' },
    // { label: 'Recipes', path: '/recipes' },
    { label: 'Contact Us', path: '/contact-us' },
  ];
  mode: MatDrawerMode = 'side';
  opened = true;
  showShop = false;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showShop = event.url === '/shop';
      }
    });
  }

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
