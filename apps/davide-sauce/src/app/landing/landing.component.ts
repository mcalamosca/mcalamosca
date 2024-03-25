import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RandomQuoteComponent } from '@mcalamosca/ui-components';

@Component({
  selector: 'ds-landing',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RandomQuoteComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  quotes: string[] = [
    'Every meal is a celebration of traditions passed down through generations, infused with the love and laughter of the Appennini foothills.',
    'Embrace the pure joy of Italian living with every spoonful of our traditional sugo di pomodoro, where life is a feast and every moment is savored.',
    'Join us in preserving a heritage rich with flavor, family, and the fervent belief that food is the heart of the home.',
    'From our garden to your table, experience the taste of tradition and the warmth of home-cooked meals steeped in Italian history.',
    "Let's make the world a healthier place, one tomato at a time. Together, we celebrate the art of cooking with love and care.",
    'Rediscover the simple pleasures of eating well, where each ingredient tells a story of lands far away and the hands that lovingly prepared them.',
    'Dive into a world where every bite tells a story of ancient hills, vibrant laughter, and the timeless dance of flavors from Italy.',
    'Savor the essence of a journey across oceans, where the love for sugo di pomodoro unites families and kindles memories of a joyful past.',
    'Step into a realm where food is not just nourishment but a bridge to our ancestors, crafted with the same passion and purity as in the Umbro sunsets.',
    'Welcome to a place where the humble tomato is celebrated, transforming meals into a canvas of Italian heritage and culinary artistry.',
    "Discover the legacy of the 'cugina Americana', where every jar of sauce is a homage to the land, its people, and their zest for life.",
    'Celebrate the simple elegance of Italian cuisine, where even the smallest ingredient carries the soul of the countryside and the spirit of the sea.',
    'Embrace a culinary tradition where the tomato sauce is not just food, but a story of love, resilience, and the fabric of a community.',
    'Join us in honoring the craftsmanship of generations, where making sugo di pomodoro is an act of love and a testament to the richness of life.',
    "Taste the purity of Italy, captured in a sauce that's been nurtured by the laughter of families and the sacred traditions of the Appennini.",
    'Be part of a movement that cherishes the art of cooking with intention, where every ingredient speaks of quality, heritage, and the joy of sharing.',
  ];
}
