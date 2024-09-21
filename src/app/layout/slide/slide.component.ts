import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/model/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselModule],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css',
})
export class SlideComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) products: Product[] = [];
  customOptions: OwlOptions = {
    nav: false,
    dots: false,
    margin: 20,
    loop: false,
    responsive: {
      '0': {
        items: 2,
      },
      '480': {
        items: 2,
      },
      '768': {
        items: 3,
      },
      '992': {
        items: 4,
      },
      '1440': {
        items: 5,
      },
    },
  };
}
