import { Component } from '@angular/core';
import { Widget } from '../../core/model/widget';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  readonly widgets: Widget[] = [
    {
      title: 'Information',
      list: [
        { title: 'About Us', link: 'about' },
        { title: 'Delivery Information', link: 'about' },
        { title: 'Privacy Policy', link: 'about' },
        { title: 'Terms & Conditions', link: 'about' },
        { title: 'Contact Us', link: 'contact-us' }
      ]
    },
    {
      title: 'My Account',
      list: [
        { title: 'Sign In', link: 'login' },
        { title: 'View Cart', link: 'cart' },
        { title: 'My Wishlist', link: 'wishlist' },
        { title: 'Track My Order', link: 'about' },
        { title: 'Help', link: 'about' }
      ]
    },
    {
      title: 'Customer Service',
      list: [
        { title: 'Payment Methods', link: 'about' },
        { title: 'Money-back guarantee!', link: 'about' },
        { title: 'Returns', link: 'about' },
        { title: 'Shipping', link: 'about' }
      ]
    }
  ];

  readonly socials = [
    { title: 'Facebook', icon: 'icon-facebook-f', link: 'https://www.facebook.com/' },
    { title: 'Twitter', icon: 'icon-twitter', link: 'https://twitter.com/' },
    { title: 'Instagram', icon: 'icon-instagram', link: 'https://www.instagram.com/' }
  ]
}
