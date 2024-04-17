import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { fadeIn } from '@mcalamosca/ui-components';
import { healthCards } from '../../assets/health-cards';

@Component({
  selector: 'ds-health',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './health.component.html',
  styleUrl: './health.component.scss',
  animations: [fadeIn],
})
export class HealthComponent {
  cards = healthCards;
}
