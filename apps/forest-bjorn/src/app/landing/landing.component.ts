import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {RandomQuoteComponent} from '@mcalamosca/ui-components';

@Component({
  selector: 'forest-bjorn-landing',
  standalone: true,
  imports: [CommonModule,MatDividerModule,MatIconModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  showMore = false;

}
