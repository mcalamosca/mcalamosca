import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { GridGalleryComponent, Image } from '@mcalamosca/ui-components';
import { Store } from '@ngrx/store';
import { loadImages, selectImages, setGalleryType } from '../../+state';

@Component({
  selector: 'forest-bjorn-gallery',
  standalone: true,
  imports: [CommonModule, GridGalleryComponent, MatProgressSpinnerModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images!: Image[];
  showGallery = false;

  loading = true;

  constructor(private store: Store, private route: ActivatedRoute) {
    //subscribe to route changes for type changes
    this.route.paramMap.subscribe((params) => {
      const galleryType = params.get('type');
      if (galleryType) {
        this.images = [];
        this.loading = true;

        this.store.dispatch(setGalleryType({ galleryType }));
        this.store.dispatch(loadImages());
        this.store.select(selectImages).subscribe(this.handleImages);
      } else {
        // Handle invalid gallery type
        console.error('Invalid gallery type');
      }
    });
  }

  private handleImages = (images: Image[]) => {
    this.images = images;
    setTimeout(() => {
      this.showGallery = this.images?.length > 0;
      this.loading = false;
    }, 1000);
  };
}
