import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import {Image} from '../grid-gallery/grid-gallery.component';
import {LightboxComponent} from '../lightbox/lightbox.component';

@Component({
  selector: 'mcui-info-section',
  standalone: true,
  imports: [],
  templateUrl: './info-section.component.html',
  styleUrl: './info-section.component.scss',
})
export class InfoSectionComponent {
  @ViewChild('lightboxContainer', { read: ViewContainerRef, static: true }) lightboxContainer!: ViewContainerRef;
  @Input() image!: Image;

  openLightbox(image: Image) {
    const componentRef = this.lightboxContainer.createComponent(LightboxComponent);
    componentRef.instance.image = image;
    componentRef.instance.closeEvent.subscribe(() => {
      componentRef.destroy();
    });
  }

}
