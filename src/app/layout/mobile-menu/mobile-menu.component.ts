import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Category } from '../../core/model/category';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.css'
})
export class MobileMenuComponent {
  searchQuery: string = '';

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

  readonly socials = [
    { title: 'Facebook', icon: 'icon-facebook-f', link: 'https://www.facebook.com/' },
    { title: 'Twitter', icon: 'icon-twitter', link: 'https://twitter.com/' },
    { title: 'Instagram', icon: 'icon-instagram', link: 'https://www.instagram.com/' }
  ]

  constructor(private router: Router) {}
  onSearch() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
  }
}
