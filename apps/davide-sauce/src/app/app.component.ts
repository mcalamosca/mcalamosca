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
  appName = 'Davide';
  subtitle = 'All Natural Tomato Sauce';
  footerName = "Davide's All Natural Tomato Sauce";
  phoneNumber = '(412) 532-6155';
  sitemapUrl = '/sitemap.xml';
  termsOfServiceUrl = '/terms-of-service';
  leftImageUrl = '../assets/images/olive-left-white.png';
  rightImageUrl = '../assets/images/olive-right-white.png';
  showOnlyContent = true;
  navItems: NavItem[] = [
    { label: 'Home', path: '' },
    { label: 'History', path: '/history' },
    { label: 'Health', path: '/health' },
    { label: 'Products', url: 'https://store.davidesauce.com/collections/all' },
    { label: 'Recipes', url: 'https://store.davidesauce.com/blogs/recipes' },
    { label: 'News', url: 'https://store.davidesauce.com/blogs/news' },
    { label: 'Contact Us', url: 'https://store.davidesauce.com/pages/contact' },
    { label: 'Store', url: 'https://store.davidesauce.com/', highlight: true },
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
