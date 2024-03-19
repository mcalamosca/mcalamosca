import { Component, OnInit, inject } from '@angular/core';
import { FlamelinkService } from './../services/flamelink.service';
import {Auth} from '@angular/fire/auth';

@Component({
  selector: 'forestbjorn-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  private auth: Auth = inject(Auth);
  constructor(private FlamelinkService: FlamelinkService) {}

  ngOnInit(): void {
    this.FlamelinkService.getDronePhotos().subscribe((data) => {
      console.log(data);
    });
  }
}
