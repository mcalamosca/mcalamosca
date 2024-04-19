import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { GridGalleryComponent, Image } from '@mcalamosca/ui-components';
import { Store } from '@ngrx/store';
import { loadDronePhotos, selectDroneImages } from '../../+state';

@Component({
  selector: 'forest-bjorn-gallery',
  standalone: true,
  imports: [CommonModule, GridGalleryComponent, MatProgressSpinnerModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images!: Image[];
  showGallery = false;

  loading = true;

  constructor(private store: Store, private route: ActivatedRoute) {
    const category = this.route.snapshot.paramMap.get('type');

    switch (category) {
      case 'drone':
        this.store.dispatch(loadDronePhotos());
        this.store.select(selectDroneImages).subscribe(this.handleImages);
        break;
      case 'portrait':
        // this.store.dispatch(loadPortraitPhotos());
        // this.store.select(selectPortraitImages).subscribe(this.handleImages);
        break;
      // Add cases for other categories (pets, real estate, family)
      default:
        // Handle invalid category
        break;
    }
  }

  private handleImages = (images: Image[]) => {
    this.images = images;
    this.showGallery = this.images.length > 0;
    this.loading = false;
  };
}
