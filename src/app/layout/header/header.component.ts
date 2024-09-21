import { Component } from '@angular/core';
import { Category } from '../../core/model/category';
import { Menu } from '../../core/model/menu';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';

  readonly accounts = [
    { title: 'My Account', icon: 'icon-user', link: 'account' },
    { title: 'Wishlist', icon: 'icon-heart-o', link: 'wishlist', count: 3 },
  ];

  cartItems = [
    {
      id: 1,
      title: 'Beige knitted elastic runner shoes',
      quantity: 1,
      price: 84.00,
      imageUrl: '/assets/images/products/cart/product-1.jpg',
    },
    {
      id: 2,
      title: 'Blue utility pinafore denim dress',
      quantity: 1,
      price: 76.00,
      imageUrl: '/assets/images/products/cart/product-2.jpg',
    },
  ];

  get totalCartPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }

  readonly categories : Category[] = [
    {
      id: 1,
      name: 'Best Books of 2024'
    },
    {
      id: 2,
      name: 'New for 2024'
    },
    {
      id: 3,
      name: 'Art & Photography'
    },
    {
      id: 4,
      name: 'Biography'
    },
    {
      id: 5,
      name: 'Business & Money'
    }
  ];

  readonly menu: Menu[] = [
    {
      id: 1,
      name: 'Home',
      url: 'home'
    },
    {
      id: 2,
      name: 'Shop',
      url: '/shop'
    },
    {
      id: 3,
      name: 'About',
      url: 'about'
    },
    {
      id: 4,
      name: 'Contact Us',
      url: 'contact-us'
    }
  ]

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/shop/'], { queryParams: { search: this.searchQuery } });
  }
}
