import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from '../grid-gallery.component';

@Component({
  selector: 'mcui-lightbox',
  standalone: true,
  imports: [],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
})
export class LightboxComponent {
  @Input() image!: Image;
  @Input() images!: Image[];

  @Output() closeEvent = new EventEmitter();

  close() {
    this.closeEvent.emit();
  }
}
