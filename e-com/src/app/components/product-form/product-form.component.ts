import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  public product: Product;
  public message!: string;

  constructor(private productService: ProductService) {
    this.product = {
      id: 2137,
      name: '',
      imageUrl: '',
      price: 0,
      isOnSale: false,
      quantityInCart: 0
    }
  }

  createProduct(productForm: NgForm) {
    if (productForm.valid) {
      this.productService.createProduct(this.product).subscribe(result => {
        this.message = result.msg;
        this.product = {
          id: 2137,
          name: '',
          imageUrl: '',
          price: 0,
          isOnSale: false,
          quantityInCart: 0
        }
      }, err => this.message = err.msg);
    } else {
      console.error('Invalid form data');
    }
  }
}
