import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../layout/pages/page-header/page-header.component";
import { BreadcrumbComponent } from "../../layout/pages/breadcrumb/breadcrumb.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [PageHeaderComponent, BreadcrumbComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup;

  readonly contactInfo = {
    email: 'XvY2z@example.com',
    tel1: '123-456-7890',
    tel2: '123-456-7890',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA'
  }

  readonly socials = [
    { title: 'Facebook', icon: 'icon-facebook-f', link: 'https://www.facebook.com/' },
    { title: 'Twitter', icon: 'icon-twitter', link: 'https://twitter.com/' },
    { title: 'Instagram', icon: 'icon-instagram', link: 'https://www.instagram.com/' }
  ]

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Add your form submission logic here (e.g., send to a server)
    }
  }

}
