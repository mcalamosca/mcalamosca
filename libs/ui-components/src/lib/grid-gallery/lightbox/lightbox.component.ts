import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Image } from '../grid-gallery.component';

@Component({
  selector: 'mcui-lightbox',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
})
export class LightboxComponent {
  @Input() image!: Image;
  @Input() images!: Image[];

  @Output() closeEvent = new EventEmitter();
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
    this.close();
  }

  @HostListener('click', ['$event']) onClickHandler(event: MouseEvent) {
    const imgElement = this.elementRef.nativeElement.querySelector('img');
    const navigateButtons = this.elementRef.nativeElement.querySelectorAll('.navigate-button');

    // if (event.target !== imgElement || event.target !== navigateButtons[0] || event.target !== navigateButtons[1]) {
    //   this.close();
    // }
  }

  next() {
    const index = this.images.indexOf(this.image);
    if (index < this.images.length - 1) {
      this.image = this.images[index + 1];
    } else {
      this.image = this.images[0];
    }
  }

  previous() {
    const index = this.images.indexOf(this.image);
    if (index > 0) {
      this.image = this.images[index - 1];
    } else {
      this.image = this.images[this.images.length - 1];
    }
  }

  close() {
    this.closeEvent.emit();
  }
}
