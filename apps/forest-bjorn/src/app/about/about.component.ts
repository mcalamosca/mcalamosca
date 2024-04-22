import { Component } from '@angular/core';
import { Image, InfoSectionComponent } from '@mcalamosca/ui-components';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'forest-bjorn-about',
  standalone: true,
  imports: [InfoSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  gear!: Image;
  vehicles!: Image;
  showInfo = false;

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getSpecificImage('about', ['can am.jpg', 'vehicles.jpg']).subscribe((data) => {
      const images = data as Image[];
      this.gear = images[0];
      this.vehicles = images[1];
      this.showInfo = true;
    });
  }
}
