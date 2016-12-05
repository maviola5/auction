import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product-service';

@Component({
  selector: 'auction-home-page',
  styleUrls: ['/home.css'],
  templateUrl: '.home.html'
})
export default class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}