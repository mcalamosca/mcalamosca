import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '@mcalamosca/ui-components';
import { products } from '../../assets/products-cards';

@Component({
  selector: 'ds-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products = products;
}
