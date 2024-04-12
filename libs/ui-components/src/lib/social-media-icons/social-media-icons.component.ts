import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mcui-social-media-icons',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './social-media-icons.component.html',
  styleUrl: './social-media-icons.component.scss',
})
export class SocialMediaIconsComponent implements OnInit {
  @Input() twitterId = '';
  @Input() facebookId = '';
  @Input() instagramId = '';
  @Input() youtubeId = '';

  twitterUrl = '';
  facebookUrl = '';
  instagramUrl = '';
  youtubeUrl = '';

  ngOnInit(): void {
    this.twitterUrl = `https://twitter.com/${this.twitterId}`;
    this.facebookUrl = `https://facebook.com/${this.facebookId}`;
    this.instagramUrl = `https://instagram.com/${this.instagramId}`;
    this.youtubeUrl = `https://www.youtube.com/channel/${this.youtubeId}`;
  }
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'myfacebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/youtube.svg')
    );
  }
}
