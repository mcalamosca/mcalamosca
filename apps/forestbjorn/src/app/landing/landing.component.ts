import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'forestbjorn-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  items$!: Observable<any[]>;

  constructor(private FirebaseService: FirebaseService) {}
}
