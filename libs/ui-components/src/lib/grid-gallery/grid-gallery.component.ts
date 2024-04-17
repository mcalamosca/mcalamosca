import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Subscription, map } from 'rxjs';
import { GridGalleryItemComponent } from './grid-gallery-item/grid-gallery-item.component';
import { LightboxComponent } from './lightbox/lightbox.component';

export interface Image {
  src: string;
  alt?: string;
}

@Component({
  selector: 'mcui-grid-gallery',
  standalone: true,
  imports: [CommonModule, MatGridListModule, GridGalleryItemComponent],
  styleUrls: ['./grid-gallery.component.scss'],
  templateUrl: './grid-gallery.component.html',
})
export class GridGalleryComponent implements OnInit, OnDestroy {
  @Input() images!: Image[];
  @Input() cols = 4;
  @Input() cols_xs = 1;
  @Input() cols_sm = 2;
  @Input() cols_md = 3;
  @Input() cols_lg = 4;
  @Input() cols_xl = 6;
  @Input() rowHeight = 1;
  @Input() gutterSize = 1;
  @Input() colsMax!: number;

  @ViewChild('lightboxContainer', { read: ViewContainerRef, static: true }) lightboxContainer!: ViewContainerRef;
  private breakpointSubscription: Subscription | undefined;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(
        map((result) => {
          if (result.matches) {
            if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
              return 1;
            }
            if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
              return 2;
            }
            if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
              return 3;
            }
            if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
              return 4;
            }
            if (this.breakpointObserver.isMatched(Breakpoints.XLarge)) {
              return 5;
            }
          }
          return 3;
        })
      )
      // don't allow cols to be greater than number of images or colsMax
      .subscribe((cols) => {
        if (this.images.length < cols) {
          this.cols = this.images.length;
        } else if (this.colsMax) {
          this.cols = Math.min(cols, this.colsMax);
        } else {
          this.cols = cols;
        }
      });
  }
  openLightbox(image: Image) {
    const componentRef = this.lightboxContainer.createComponent(LightboxComponent);
    componentRef.instance.image = image;
    componentRef.instance.images = this.images;
    componentRef.instance.closeEvent.subscribe(() => {
      componentRef.destroy();
    });
  }

  closeLightbox() {
    this.lightboxContainer.clear();
  }

  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
