import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GridGalleryComponent, Image } from '@mcalamosca/ui-components';
import { Store } from '@ngrx/store';
import { loadDronePhotos, selectDroneImages } from '../../+state';

@Component({
  selector: 'forest-bjorn-drone',
  standalone: true,
  imports: [CommonModule, GridGalleryComponent, MatProgressSpinnerModule],
  templateUrl: './drone.component.html',
  styleUrl: './drone.component.scss',
})
export class DroneComponent {
  images!: Image[];
  showGallery = false;

  loading = true;

  constructor(private store: Store) {
    this.store.dispatch(loadDronePhotos());
    this.store.select(selectDroneImages).subscribe((images: Image[]) => {
      this.images = images;
      this.showGallery = this.images.length > 0;
      this.loading = false;
    });
  }
}
