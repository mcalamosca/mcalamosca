import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-recipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {}
