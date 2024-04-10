import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mcui-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() year: number = new Date().getFullYear();
  @Input() companyName = '';
  @Input() address = '';
  @Input() phone = '';
  @Input() sitemapUrl = '';
  @Input() privacyPolicyUrl = '';
  @Input() termsOfServiceUrl = '';
}
