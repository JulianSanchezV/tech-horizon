import { Component } from '@angular/core';
import CheckoutComponent from '@features/checkout/checkout.component';
import ProductsComponent from '@features/products/products.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CheckoutComponent, ProductsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
