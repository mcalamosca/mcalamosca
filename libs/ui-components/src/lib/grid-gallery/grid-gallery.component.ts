import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Subscription, map } from 'rxjs';
import { GridGalleryItemComponent } from './grid-gallery-item/grid-gallery-item.component';

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
export class GridGalleryComponent implements OnInit, OnDestroy, OnChanges {
  @Input() images!: Image[];
  @Input() cols = 4;
  @Input() cols_xs = 1;
  @Input() cols_sm = 2;
  @Input() cols_md = 3;
  @Input() cols_lg = 4;
  @Input() cols_xl = 6;
  @Input() rowHeight = 1;
  @Input() gutterSize = 1;
  private colsSetManually = false;

  private breakpointSubscription: Subscription | undefined;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cols']) {
      this.colsSetManually = true;
    }
  }

  ngOnInit() {
    if (!this.colsSetManually) {
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
        .subscribe((cols) => (this.cols = cols > this.images.length ? this.images.length : cols));
    }
  }

  ngOnDestroy() {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
