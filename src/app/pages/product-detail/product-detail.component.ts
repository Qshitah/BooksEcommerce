import { Component } from '@angular/core';
import { Product } from '../../core/model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  readonly product: Product = {
    id: 1,
    title: 'Becoming',
    author: 'Michelle Obama',
    image: 'assets/images/demos/demo-20/products/product-1.jpg',
    price: 19.50,
    oldPrice: 32.50,
    rating: 4,
    reviews: 10,
  };
}
