import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mcui-social-media-icons',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './social-media-icons.component.html',
  styleUrl: './social-media-icons.component.scss',
})
export class SocialMediaIconsComponent {
  //constructor with social media icons to register in maticon registry
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'myfacebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/twitter.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/instagram.svg')
    );
  }
}
