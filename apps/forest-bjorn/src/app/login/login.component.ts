import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
  selector: 'forest-bjorn-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private auth: Auth = inject(Auth);

  constructor() {
    //local
    console.log(this.auth);
  }

  googleLoginPopup() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider);
  }
}
