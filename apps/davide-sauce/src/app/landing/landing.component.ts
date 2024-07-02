import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RandomQuoteComponent } from '@mcalamosca/ui-components';
import { quotes } from '../../assets/quotes';

interface Highlight {
  text: string;
  route?: string;
  url?: string;
  button?: boolean;
}
@Component({
  selector: 'ds-landing',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RandomQuoteComponent, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        style({ opacity: 0 }), // Initial state
        animate('2s ease', style({ opacity: 1 })), // Final animation state
      ]),
    ]),
  ],
})
export class LandingComponent implements OnInit {
  quotes = quotes;

  highlights: Highlight[] = [
    {
      text: 'No Seed Oils, Extra Virgin Olive Oil',
    },
    {
      text: 'No Sugar or Preservatives',
    },
    {
      text: 'Fresh Vegetables',
    },
    {
      text: 'Low Sodium',
    },
    {
      text: 'Learn More about Health Benefits',
      route: '/health',
    },
    {
      text: 'Buy Now',
      url: 'https://store.davidesauce.com/collections/all',
      button: true
    }
  ];

  visibleHighlights: Highlight[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.fadeInHighlights();
    }, 4000);
  }

  goToUrl(link: string){
    window.open(link, '_self');
  }

  fadeInHighlights() {
    for (let i = 0; i < this.highlights.length; i++) {
      setTimeout(() => {
        this.visibleHighlights.push(this.highlights[i]);
      }, i * 2000);
    }
  }
}
