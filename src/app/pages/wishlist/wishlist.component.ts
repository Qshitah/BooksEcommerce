import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../layout/pages/page-header/page-header.component";
import { BreadcrumbComponent } from "../../layout/pages/breadcrumb/breadcrumb.component";
import { Product } from '../../core/model/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [PageHeaderComponent, BreadcrumbComponent,CommonModule,RouterModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  readonly products: Product[] = [
    {
      id: 1,
      title: 'Becoming',
      author: 'Michelle Obama',
      image: 'assets/images/demos/demo-20/products/product-1.jpg',
      price: 19.50,
      oldPrice: 32.50,
      rating: 4,
      reviews: 10,
    },
    {
      id: 2,
      title: 'The Secret Barrister',
      author: 'Jordan B. Peterson',
      image: 'assets/images/demos/demo-20/products/product-2.jpg',
      price: 17.34,
      rating: 5,
      reviews: 7,
    },
    {
      id: 3,
      title: 'Five Feet Apart',
      author: 'Rachael Lippincott',
      image: 'assets/images/demos/demo-20/products/product-3.jpg',
      price: 14.95,
      oldPrice: 18.99,
      rating: 3,
      reviews: 6,
    },
    {
      id: 4,
      title: 'The 7 Habits of Highly Effective People',
      author: 'Stephen R. Covey',
      image: 'assets/images/demos/demo-20/products/product-4.jpg',
      price: 15.99,
      rating: 4,
      reviews: 12,
    }
  ];
}
