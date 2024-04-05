import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { fade, fadeIn } from '../animations';

export enum CardType {
  square = 'square',
  round = 'round',
}
@Component({
  selector: 'mcui-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  animations: [fadeIn, fade],
})
export class ProductCardComponent {
  @Input() name = '';
  @Input() imageUrl = '';
  @Input() image2Url = '';

  @Input() bgColor = 'transparent';
  @Input() titleColor = '#000000';
  @Input() description = '';

  @Input() type: 'square' | 'round' = 'square';

  showImage = true;

  get backgroundRgba(): string {
    return this.convertToRgba(this.bgColor, 0.75);
  }
  private convertToRgba(hex: string, alpha: number): string {
    hex = hex.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  showHideImage() {
    this.showImage = !this.showImage;
  }
}
