import { Component, inject } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavItem } from '@mcalamosca/ui-components';
import { Observable } from 'rxjs';

@Component({
  selector: 'forest-bjorn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items$!: Observable<DocumentData[]>;
  firestore: Firestore = inject(Firestore);

  appName = 'Forest Björn';
  subtitle = 'Discover Nature Through A New Lens';
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
    { label: 'Contact', route: '/contact' },
    { label: 'Login', route: '/login' },
  ];
  mode: MatDrawerMode = 'side';
  opened = false;
  constructor() {
    const itemCollection = collection(this.firestore, 'drone_photos');
    this.items$ = collectionData(itemCollection);
    this.items$.subscribe(next => console.log(next))
  }
}
