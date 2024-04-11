import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { floatIn } from '../animations';

@Component({
  selector: 'mcui-random-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-quote.component.html',
  styleUrl: './random-quote.component.scss',
  animations: [floatIn],
})
export class RandomQuoteComponent implements OnInit {
  quote = '';
  showReplay = false;
  clickWait = false;
  animationState: string | null = null;
  @Input() animate = true;

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
