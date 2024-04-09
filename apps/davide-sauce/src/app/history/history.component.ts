import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GridGalleryComponent, fadeIn } from '@mcalamosca/ui-components';

interface HistoryCard {
  title: string;
  summary: string;
  paragraphs: string[];
  expand: boolean;
  images: Image[];
}
interface Image {
  src: string;
  alt: string;
}
@Component({
  selector: 'ds-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, GridGalleryComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  animations: [fadeIn],
})
export class HistoryComponent {
  historyCards: HistoryCard[] = [
    {
      title: 'Family Tradition',
      summary:
        'Dive into the stirring journey of Davide’s sauce, born from the dreams of his mother Palmiera and nurtured through generations from' +
        ' the Italian Appennini to Pittsburgh.',
      paragraphs: [
        'Palmiera, a woman whose dreams spanned the vast Atlantic, found herself in the embrace of Italy’s Appennini mountains, a place where her roots intertwined with the earth and sky. It was here, among wild horses and the songs of her ancestors, that the art of ‘sugo di pomodoro’—tomato sauce—was whispered to her soul, a tradition bathed in the purity of life itself.',
        'With Carlo, her chosen love, Palmiera returned to America, carrying more than just memories; she brought with her a legacy waiting to be reborn. In the coal-mining town of Universal, near Pittsburgh, they settled into a life where the past and present blurred, where Italian traditions whispered amidst the hum of the New World. Despite the changing times, the essence of Italy thrived within their home, nurtured by Palmiera’s unwavering spirit.',
        'Into this world, Davide was born, a child with curls as wild as the wind and a heart as vast as the sea. His was a soul that danced between the trees and kitchens, where stories of Italy were as tangible as the food that filled them. Davide grew, fueled by tales of bravery and the sacredness of human life, his imagination fertile with dreams of heroism and a deep-rooted desire to protect the sanctity of family tradition.',
        'The language of ‘sugo di pomodoro’ became Davide’s to speak, a dialect of love and legacy passed down through generations. With each visit to Italia, his spirit was stitched more closely to the fabric of his heritage, guided by the hands of his ‘zia’ Bruna and the humble lessons learned amidst the beauty of Senigallia. Davide’s path was clear, marked by the simplicity of tomato sauce and the profound belief in the importance of preserving one’s heritage.',
        'And so, Davide ventured forth, armed with the wisdom of his forebears and a simple yet profound mission: to share the purity of ‘sugo di pomodoro’ with America. His was not just a business but a crusade to honor the memory of those who came before, to protect the traditions that nourish the soul and body alike. In every jar of sauce, Davide encapsulated the essence of Universal Road, the spirit of Italy, and the sacrifices of a family that dared to dream.',
        'Today, Davide’s sauce is more than just a product; it is a testament to the belief that we are custodians of our heritage, responsible for carrying forward the legacy of those who nurtured us. It is a call to all who cherish the act of cooking, to join hands in making the world a healthier, more connected place. For in the humble act of making tomato sauce, Davide found his purpose, serving the purity he cherished across the ocean and in the garden of his childhood home.',
        'In this tale of tradition, sacrifice, and love, we are reminded that the flavors we cherish are not just about food but about honoring life itself. Davide, with his humble work, invites us all to partake in the feast of heritage, to remember and to celebrate the traditions that bind us, one delicious spoonful at a time.',
      ],
      expand: false,
      images: [
        { src: 'assets/images/history/palmiera.jpg', alt: 'Palmiera Calamosca in High School' },
        { src: 'assets/images/history/Thelma.Beppi.Polly.jpg', alt: 'Thelma Beppi Polly' },
        { src: 'assets/images/history/David-Italy-1958.jpg', alt: 'David Italy 1958' },
        { src: 'assets/images/history/Serafina-&-Enzo- Vaccara 1960.jpg', alt: 'Serafina & Enzo Vaccara 1960' },
        { src: 'assets/images/history/Sheep-on-Road-Umbria-1986.jpg', alt: 'Sheep on Road Umbria 1986' },
        { src: 'assets/images/history/senigallia beach fisherman.jpg', alt: 'Senigallia beach fisherman' },
      ],
    },
    {
      title: 'The Beginning',
      summary:
        'The history of Davide Sauce begins in 1987, when the founder, Davide, decided to start his own business.',
      paragraphs: [
        'The history of Davide Sauce begins in 1987, when the founder, Davide, decided to start his own business. He had been working in the food industry for years and wanted to create a product that would be both delicious and healthy. After months of research and experimentation, he finally came up with the perfect recipe for his sauce.',
        "Davide's sauce was an instant hit with his friends and family, who encouraged him to start selling it to the public. He began by selling his sauce at local markets and soon expanded to local grocery stores. People loved the fresh taste and healthy ingredients, and the business began to grow.",
      ],
      expand: false,
      images: [
        { src: 'assets/images/history/micah-in-pot-age-2.jpg', alt: 'Micah Age 2' },
        { src: 'assets/images/history/davide-pot.jpg', alt: 'Davide, 1995 at his production facility' },
        { src: 'assets/images/history/micah-bottling-sauce-age-7.jpg', alt: 'Micah Bottling Sauce Age 7' },
        { src: 'assets/images/history/micah-cleaning-up-kitchen-age-2.jpg', alt: 'Micah Cleaning Up Kitchen Age 2' },
        { src: 'assets/images/history/Micah bottling sauce age 7.jpg', alt: 'Micah Bottling Sauce Age 7' },
        { src: 'assets/images/history/olive press senigallia 2000.jpg', alt: 'Olive Press Senigallia 2000' },
        {
          src: 'assets/images/history/Making Sauce in basement Penn Hills.jpg',
          alt: 'Making Sauce in basement Penn Hills',
        },
      ],
    },
    {
      title: 'Our Mission',
      summary:
        'Today, Davide Sauce is sold in stores around the Greater Pittsburgh Area and has a loyal following of customers.',
      paragraphs: [
        "Our mission is to provide our customers with a delicious and healthy product that they can feel good about eating. We use only the freshest ingredients and never add any preservatives or artificial flavors. Our sauce is made with love and tradition, just like Davide's mother used to make it.",
        'Today, Davide Sauce is sold in stores around the Greater Pittsburgh Area and has a loyal following of customers. We are proud to be a part of the community and to share our family tradition with others. We hope that you will enjoy our sauce as much as we do!',
        "Davide's son Micah has taken over the business and is committed to carrying on the family tradition. He is passionate about creating delicious and healthy food and is always looking for ways to improve the sauce. With his dedication and love for the product, Davide Sauce is sure to continue thriving for generations to come.",
      ],
      expand: false,
      images: [
        { src: 'assets/images/history/Micah.JPG', alt: 'Micah sampling at Whole Foods Market' },
        { src: 'assets/images/history/nonno-micah-theo.jpg', alt: 'Davide, Micah, and his grandson Theo' },
        { src: 'assets/images/history/nonno-theo.jpg', alt: 'Davide and his grandson Theo' },
      ],
    },
    {
      title: 'Fred Rogers',
      summary:
        'In 1995, Davide met Fred Rogers, the beloved host of Mister Rogers’ Neighborhood, who became a loyal customer and friend.',
      paragraphs: [
        'In 1995, Davide met Fred Rogers, the beloved host of Mister Rogers’ Neighborhood, who became a loyal customer and friend. Fred loved the sauce and would often buy it for his family and friends. He even wore a Davide Sauce t-shirt while relaxing outside of the show, which he shared in photos to us.',
        'Fred had a huge heart and was always willing to help out in any way he could. He and Davide became great friends over the years, they shared many good times together and talked about the importance of family traditions. Fred’s kindness and generosity will always be remembered and cherished by the Davide Sauce family.',
      ],
      expand: false,
      images: [
        { src: "assets/images/history/Fred's shirt.png", alt: "Fred's shirt" },
        { src: 'assets/images/history/Fred & kids 1995.jpg', alt: 'Fred & kids 1995' },
        { src: 'assets/images/history/Fred My T Shirt Seated.jpg', alt: 'Fred Davide T Shirt' },
      ],
    },
  ];

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.historyCards.forEach((card) => (card.expand = false));
  }
  flipCard(card: HistoryCard): void {
    // If any card is expanded, add a new state to the history to capture back button
    if (!card.expand) {
      history.pushState({ expanded: true }, '');
    }
    card.expand = !card.expand;
  }

  showExpandedOnly(thisCard: HistoryCard): Record<string, string> {
    const expanded = this.historyCards.some((card) => card.expand);
    if (expanded && !thisCard.expand) {
      return {
        display: 'none',
      };
    } else {
      return {};
    }
  }
}
