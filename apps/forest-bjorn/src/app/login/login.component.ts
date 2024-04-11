import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'forest-bjorn-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
