import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../layout/pages/page-header/page-header.component";
import { BreadcrumbComponent } from "../../layout/pages/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PageHeaderComponent, BreadcrumbComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
