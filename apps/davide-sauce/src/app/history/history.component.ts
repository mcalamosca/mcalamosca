import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { fadeIn } from '@mcalamosca/ui-components';

@Component({
  selector: 'ds-history',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  animations: [fadeIn]
})
export class HistoryComponent {}
