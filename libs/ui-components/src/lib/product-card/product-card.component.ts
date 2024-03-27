import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'mcui-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  animations: [
    trigger('floatIn', [
      transition('* => *', [
        style({ opacity: 0 }), // Initial state
        animate('3s ease', style({ opacity: 1 })), // Final animation state
      ]),
    ]),
    trigger('fade', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', [animate('0.5s')]),
      transition('hide => show', [animate('0.5s')]),
    ]),
  ],
})
export class ProductCardComponent {
  @Input() name = '';
  @Input() imageUrl = '';
  @Input() bgColor = 'transparent';
  @Input() titleColor = '#000000';
  @Input() description = '';

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
