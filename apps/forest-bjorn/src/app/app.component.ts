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
  subtitle = 'Capture the Extraordinary';
  navItems: NavItem[] = [
    { label: 'Home', path: '/home' },
    {
      label: 'Portfolio',
      path: '/portfolio',
      children: [
        { label: 'Drone', path: '/portfolio/drone' },
        { label: 'Portrait', path: '/portfolio/portrait' },
        { label: 'Pets', path: '/portfolio/pets' },
        { label: 'Real Estate', path: '/portfolio/real-estate' },
        { label: 'Family', path: '/portfolio/family' },
      ],
    },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
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
