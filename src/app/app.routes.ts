import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

export const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  }
  ,
  {
    path:'about',
    component: AboutComponent
  }
  ,
  {
    path:'contact-us',
    component: ContactUsComponent
  }
  ,
  {
    path: 'shop',
    component: ShopComponent
  }
  ,
  {
    path: 'shop/:id',
    component: ShopComponent
  }
  ,
  {
    path: 'shop/product/:id',
    component: ProductDetailComponent
  }
  ,
  {
    path:'wishlist',
    component: WishlistComponent
  }
  ,
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
