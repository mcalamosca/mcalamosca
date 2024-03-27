import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RandomQuoteComponent } from '@mcalamosca/ui-components';
import { quotes } from '../../assets/quotes';

interface Highlight {
  text: string;
  href?: string;
}
@Component({
  selector: 'ds-landing',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RandomQuoteComponent],
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
      text: 'No Seed Oils, Sugar, or Preservatives',
    },
    {
      text: 'Extra Virgin Olive Oil',
    },
    {
      text: 'Fresh Vegetables',
    },
    {
      text: 'Low Sodium',
    },
    {
      text: 'Click to Learn More',
      href: '/health',
    },
  ];

  visibleHighlights: Highlight[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.fadeInHighlights();
    }, 4000);
  }

  fadeInHighlights() {
    for (let i = 0; i < this.highlights.length; i++) {
      setTimeout(() => {
        this.visibleHighlights.push(this.highlights[i]);
      }, i * 2000);
    }
  }
}
