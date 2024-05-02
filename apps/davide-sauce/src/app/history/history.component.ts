import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GridGalleryComponent, InfoSectionComponent, fadeIn } from '@mcalamosca/ui-components';
import { historyCards } from '../../assets/history-cards';
import {MatIconModule} from '@angular/material/icon';

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
  imports: [CommonModule, MatCardModule, MatButtonModule, GridGalleryComponent, InfoSectionComponent, MatIconModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  animations: [fadeIn],
})
export class HistoryComponent {
  historyCards: HistoryCard[] = historyCards;

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
