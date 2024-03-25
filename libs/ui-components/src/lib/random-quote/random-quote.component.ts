import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-ui-random-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-quote.component.html',
  styleUrl: './random-quote.component.scss',
  animations: [
    trigger('floatIn', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(-50px)' }), // Initial state
        animate('4s ease', style({ opacity: 1, transform: 'translateY(0)' })), // Final animation state
      ]),
    ]),
  ],
})
export class RandomQuoteComponent implements OnInit {
  quote = '';
  showReplay = false;
  clickWait = false;
  animationState: string | null = null;

  @Input() quotes!: string[];

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote() {
    if (!this.clickWait && this.quotes.length !== 0) {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.quote = this.quotes[randomIndex];
      this.quotes.splice(randomIndex, 1);

      this.clickWait = true;
      setTimeout(() => {
        this.clickWait = false;
      }, 4000);

      this.animationState = Date.now().toString();
    }
  }
}
