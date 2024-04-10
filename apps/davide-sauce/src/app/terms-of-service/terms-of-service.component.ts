import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'ds-terms-of-service',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './terms-of-service.component.html',
  styleUrl: './terms-of-service.component.scss',
})
export class TermsOfServiceComponent {}
