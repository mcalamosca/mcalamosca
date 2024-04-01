import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Image } from '../grid-gallery.component';

@Component({
  selector: 'mcui-grid-gallery-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-gallery-item.component.html',
  styleUrls: ['./grid-gallery-item.component.scss'],
})
export class GridGalleryItemComponent {
  @Input() image!: Image;
  @Input() rowHeight = 1;
  @Input() gutterSize = 1;
  @ViewChild('img') img!: ElementRef;

  public rows = 0;

  @HostListener('window:resize')
  calculateRows() {
    this.rows = Math.floor(this.img.nativeElement.offsetHeight / (this.rowHeight + this.gutterSize));
  }
}
