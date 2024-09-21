import { Component } from '@angular/core';
import { Banner } from '../../core/model/banner';
import { title } from 'process';
import { Product } from '../../core/model/product';
import { SlideComponent } from "../../layout/slide/slide.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly banners: Banner[] = [
    {
      id: 1,
      title: 'Business & Economics',
      subtitle: 'New Arrivals',
      link: '#',
      imageUrl: 'assets/images/demos/demo-20/banners/banner-1.jpg',
      buttonTitle: 'Discover Now',
    },
    {
      id: 2,
      title: 'Must-Read Travel Books',
      subtitle: '20% Off Use Code: mybook',
      link: '#',
      imageUrl: 'assets/images/demos/demo-20/banners/banner-2.jpg',
      buttonTitle: 'Shop Now',
    },
    {
      id: 3,
      title: 'Must-Read Travel Books',
      subtitle: 'Deal Of The Day',
      link: '#',
      imageUrl: 'assets/images/demos/demo-20/banners/banner-3.jpg',
      buttonTitle: 'Shop Now',
    },
    {
      id: 4,
      title: 'Must-Read Travel Books',
      subtitle: 'New This Week',
      link: '#',
      imageUrl: 'assets/images/demos/demo-20/banners/banner-4.jpg',
      buttonTitle: 'Discover Now',
    }
  ];

  readonly iconBoxes = [
    {
      title: "Payment & Delivery",
      description: "Free shipping for orders over $50",
      icon: "icon-truck"
    },
    {
      title: "Return & Refund",
      description: "Free 100% money back guarantee",
      icon: "icon-rotate-left"
    },
    {
      title: "Customer Support",
      description: "24/7 amazing customer support",
      icon: "icon-life-ring"
    }
    ,
    {
      title: "Quality Support",
      description: "Alway online feedback 24/7",
      icon: "icon-envelope"
    }
  ];

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
