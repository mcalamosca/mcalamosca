import { Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, User, authState, signInWithPopup } from '@angular/fire/auth';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavItem } from '@mcalamosca/ui-components';

@Component({
  selector: 'forest-bjorn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  auth: Auth = inject(Auth);
  storage: Storage = inject(Storage);
  ref = ref(this.storage, 'gs://forest-bjorn-photography.appspot.com/forest-bjorn-background.mp4');
  bgVideoUrl!: string;

  user!: User | null;

  appName = 'Forest Björn';
  subtitle = 'Capturing the Unreachable';
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
  ];
  mode: MatDrawerMode = 'side';
  opened = false;
  getBackgroundVideo() {
    getDownloadURL(this.ref).then((url) => {
      this.bgVideoUrl = url;
    });
  }

  constructor() {
    this.getBackgroundVideo();
    authState(this.auth).subscribe((user) => {
      this.user = user;
    });
  }
  googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider);
  }
  logout() {
    this.auth.signOut();
  }
  authAction(action: 'login' | 'logout') {
    if (action === 'login') {
      this.googleLogin();
    } else if (action === 'logout') {
      this.logout();
    }
  }
}
